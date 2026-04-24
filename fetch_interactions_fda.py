import json
import time
import requests
import os
import sys

def check_interaction_fda(drug1, drug2):
    # query openFDA for labels mentioning both drugs in drug_interactions section
    # openFDA allows 240 requests/minute without an API key
    query = f"drug_interactions:({drug1} AND {drug2})"
    url = f"https://api.fda.gov/drug/label.json?search={query}&limit=1"
    
    try:
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            try:
                data = response.json()
            except json.JSONDecodeError:
                return None
            if 'results' in data and len(data['results']) > 0:
                result = data['results'][0]
                interactions_text = result.get('drug_interactions', [])
                if interactions_text:
                    # just grab the first paragraph/item
                    return interactions_text[0]
            return "Found label, but no specific text."
        elif response.status_code == 404:
            # no matching labels found
            return None
        else:
            print(f"API returned {response.status_code} for {drug1}+{drug2}")
            return None
    except requests.exceptions.RequestException as e:
        print(f"Error fetching openFDA for {drug1}+{drug2}: {e}")
        return None

def main():
    input_file = 'missing_interactions.json'
    output_file = 'zweryfikowane_interakcje.json'
    
    if not os.path.exists(input_file):
        print(f"File {input_file} not found.")
        sys.exit(1)

    with open(input_file, 'r', encoding='utf-8') as f:
        pairs = json.load(f)

    print(f"Loaded {len(pairs)} pairs to process.")

    results = []

    count = 0
    for pair in pairs:
        count += 1
        sub_a_en = pair.get('substanceA', '').lower()
        sub_b_en = pair.get('substanceB', '').lower()

        name_a_pl = pair.get('nameA', sub_a_en)
        name_b_pl = pair.get('nameB', sub_b_en)

        if count % 10 == 0:
            print(f"Processing {count}/{len(pairs)}...")

        result_pair = {
            "substanceA": pair.get('substanceA'),
            "nameA": pair.get('nameA'),
            "substanceB": pair.get('substanceB'),
            "nameB": pair.get('nameB')
        }

        # FDA search works better with generic names, we will use english names
        interaction_text = check_interaction_fda(sub_a_en, sub_b_en)
        time.sleep(0.3) # 3 reqs / sec

        if interaction_text:
            result_pair["status"] = "Znaleziono interakcje"
            result_pair["risk_level"] = "caution" # Default when we don't know
            result_pair["description_pl"] = f"Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: {interaction_text[:200]}..."
        else:
            result_pair["status"] = "Brak udokumentowanych interakcji"
            result_pair["risk_level"] = "low_no_interaction"
            result_pair["description_pl"] = "Brak udokumentowanych interakcji."

        results.append(result_pair)

        if count % 50 == 0:
            with open(output_file, 'w', encoding='utf-8') as f:
                json.dump(results, f, indent=2, ensure_ascii=False)

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)

    print("Done! Results saved to", output_file)

if __name__ == "__main__":
    main()


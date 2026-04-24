BEGIN;

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'cocaine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'codeine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'ketamine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'psilocybin'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'lsd'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'cbd'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'dmt'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'diazepam'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'dxm'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'ghb'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = '2cb'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'caffeine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'nicotine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'salvia'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'nitrous'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'alprazolam'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'kratom'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'zolpidem'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'thc'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'methylphenidate'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'pregabalin'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'dph'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'muscimol'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'modafinil'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'morphine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'scopolamine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'oxycodone'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'fentanyl'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'pcp'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'quetiapine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'mescaline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'heroin'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'phenibut'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'tramadol'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'memantine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'bupropion'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'selegiline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'ldopa'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'yohimbine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'venlafaxine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = 'amitriptyline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mephedrone' AND b.key = '3mmc'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'mdma'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'cocaine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'codeine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'ketamine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'psilocybin'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'lsd'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'cbd'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'dmt'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'diazepam'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'dxm'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'ghb'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = '2cb'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'caffeine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'alcohol'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'nicotine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'salvia'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'nitrous'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'alprazolam'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'methamphetamine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'kratom'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'zolpidem'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'thc'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'methylphenidate'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'pregabalin'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'dph'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'muscimol'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'modafinil'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'morphine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'scopolamine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'oxycodone'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'fentanyl'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'pcp'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'quetiapine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'mescaline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'heroin'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'phenibut'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'tramadol'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'memantine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'bupropion'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'selegiline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'ldopa'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'yohimbine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'venlafaxine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = 'amitriptyline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = '3cmc' AND b.key = '3mmc'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'mdma'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'codeine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'ketamine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'psilocybin'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'lsd'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'cbd'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'dmt'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'diazepam'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'dxm'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'ghb'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = '2cb'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'caffeine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'alcohol'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'nicotine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'salvia'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'nitrous'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'methamphetamine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'kratom'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'zolpidem'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'thc'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'methylphenidate'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'pregabalin'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'dph'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'muscimol'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'modafinil'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'morphine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'scopolamine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'oxycodone'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'fentanyl'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'pcp'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'quetiapine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'mescaline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'heroin'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'phenibut'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'tramadol'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'memantine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'bupropion'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'selegiline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'ldopa'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'yohimbine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'venlafaxine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = 'amitriptyline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'alpvp' AND b.key = '3mmc'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mdma' AND b.key = 'codeine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mdma' AND b.key = 'cbd'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mdma' AND b.key = 'dmt'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mdma' AND b.key = 'diazepam'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mdma' AND b.key = 'ghb'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mdma' AND b.key = 'nicotine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mdma' AND b.key = 'salvia'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mdma' AND b.key = 'alprazolam'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mdma' AND b.key = 'methamphetamine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mdma' AND b.key = 'zolpidem'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mdma' AND b.key = 'methylphenidate'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mdma' AND b.key = 'pregabalin'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mdma' AND b.key = 'dph'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mdma' AND b.key = 'muscimol'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mdma' AND b.key = 'modafinil'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mdma' AND b.key = 'morphine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mdma' AND b.key = 'scopolamine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mdma' AND b.key = 'oxycodone'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mdma' AND b.key = 'fentanyl'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mdma' AND b.key = 'pcp'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mdma' AND b.key = 'quetiapine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mdma' AND b.key = 'mescaline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mdma' AND b.key = 'heroin'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mdma' AND b.key = 'phenibut'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mdma' AND b.key = 'tramadol'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mdma' AND b.key = 'memantine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mdma' AND b.key = 'bupropion'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mdma' AND b.key = 'selegiline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mdma' AND b.key = 'ldopa'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mdma' AND b.key = 'yohimbine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mdma' AND b.key = 'venlafaxine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mdma' AND b.key = 'amitriptyline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'mdma' AND b.key = '3mmc'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cocaine' AND b.key = 'psilocybin'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cocaine' AND b.key = 'cbd'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cocaine' AND b.key = 'dmt'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: Drug Interactions Potential interactions between Cesamet 2 mg, and diazepam 5 mg; sodium secobarbital 100 mg; alcohol 45 mL (absolute laboratory alcohol); or codeine 65 mg, were evaluated in 15 subjec...'
FROM public.substances a, public.substances b
WHERE a.key = 'cocaine' AND b.key = 'diazepam'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cocaine' AND b.key = '2cb'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cocaine' AND b.key = 'salvia'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cocaine' AND b.key = 'nitrous'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cocaine' AND b.key = 'alprazolam'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cocaine' AND b.key = 'kratom'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: 7 DRUG INTERACTIONS CNS depressants: Enhanced CNS-depressant effects with combination use. Use with alcohol causes additive psychomotor impairment. ( 7.1 ) Imipramine: Decreased alertness observed wit...'
FROM public.substances a, public.substances b
WHERE a.key = 'cocaine' AND b.key = 'zolpidem'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: Drug Interactions Potential interactions between Cesamet 2 mg, and diazepam 5 mg; sodium secobarbital 100 mg; alcohol 45 mL (absolute laboratory alcohol); or codeine 65 mg, were evaluated in 15 subjec...'
FROM public.substances a, public.substances b
WHERE a.key = 'cocaine' AND b.key = 'thc'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: 7 DRUG INTERACTIONS Drugs that Reduce Catecholamine Uptake or Deplete Stores: Discontinue these drugs prior to and following AZEDRA administration. ( 2.3 ), ( 7.1 ) 7.1 Drugs that Reduce Catecholamine...'
FROM public.substances a, public.substances b
WHERE a.key = 'cocaine' AND b.key = 'methylphenidate'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cocaine' AND b.key = 'pregabalin'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cocaine' AND b.key = 'dph'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cocaine' AND b.key = 'muscimol'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: 7 DRUG INTERACTIONS Ioflupane I 123 binds to the dopamine transporter [ see Clinical Pharmacology ( 12.1 ) ]. Drugs that bind to the dopamine transporter with high affinity may interfere with the imag...'
FROM public.substances a, public.substances b
WHERE a.key = 'cocaine' AND b.key = 'modafinil'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cocaine' AND b.key = 'morphine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: Drug Interactions In studies involving patients with AIDS and/or cancer, Dronabinol Capsules has been co-administered with a variety of medications (e.g., cytotoxic agents, anti-infective agents, seda...'
FROM public.substances a, public.substances b
WHERE a.key = 'cocaine' AND b.key = 'scopolamine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: DRUG INTERACTIONS Inhibitors of CYP3A4 and CYP2D6 The concomitant use of Oxycodone and Acetaminophen Tablets and CYP3A4 inhibitors, such as macrolide antibiotics (e.g., erythromycin), azole-antifungal...'
FROM public.substances a, public.substances b
WHERE a.key = 'cocaine' AND b.key = 'oxycodone'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cocaine' AND b.key = 'fentanyl'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cocaine' AND b.key = 'pcp'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cocaine' AND b.key = 'quetiapine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cocaine' AND b.key = 'mescaline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cocaine' AND b.key = 'heroin'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cocaine' AND b.key = 'phenibut'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: DRUG INTERACTIONS Inhibitors of CYP3A4 and CYP2D6 The concomitant use of Oxycodone and Acetaminophen Tablets and CYP3A4 inhibitors, such as macrolide antibiotics (e.g., erythromycin), azole-antifungal...'
FROM public.substances a, public.substances b
WHERE a.key = 'cocaine' AND b.key = 'tramadol'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cocaine' AND b.key = 'memantine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: 7 DRUG INTERACTIONS Drugs that Reduce Catecholamine Uptake or Deplete Stores: Discontinue these drugs prior to and following AZEDRA administration. ( 2.3 ), ( 7.1 ) 7.1 Drugs that Reduce Catecholamine...'
FROM public.substances a, public.substances b
WHERE a.key = 'cocaine' AND b.key = 'bupropion'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: 7 DRUG INTERACTIONS Ioflupane I 123 binds to the dopamine transporter [ see Clinical Pharmacology ( 12.1 ) ]. Drugs that bind to the dopamine transporter with high affinity may interfere with the imag...'
FROM public.substances a, public.substances b
WHERE a.key = 'cocaine' AND b.key = 'selegiline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cocaine' AND b.key = 'ldopa'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: 7 DRUG INTERACTIONS Drugs that Reduce Catecholamine Uptake or Deplete Stores: Discontinue these drugs prior to and following AZEDRA administration. ( 2.3 ), ( 7.1 ) 7.1 Drugs that Reduce Catecholamine...'
FROM public.substances a, public.substances b
WHERE a.key = 'cocaine' AND b.key = 'yohimbine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: 7 DRUG INTERACTIONS Drugs that Reduce Catecholamine Uptake or Deplete Stores: Discontinue these drugs prior to and following AZEDRA administration. ( 2.3 ), ( 7.1 ) 7.1 Drugs that Reduce Catecholamine...'
FROM public.substances a, public.substances b
WHERE a.key = 'cocaine' AND b.key = 'venlafaxine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: Drug Interactions In studies involving patients with AIDS and/or cancer, Dronabinol Capsules has been co-administered with a variety of medications (e.g., cytotoxic agents, anti-infective agents, seda...'
FROM public.substances a, public.substances b
WHERE a.key = 'cocaine' AND b.key = 'amitriptyline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cocaine' AND b.key = '3mmc'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'amphetamine' AND b.key = 'cbd'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'amphetamine' AND b.key = 'dmt'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'amphetamine' AND b.key = 'salvia'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'amphetamine' AND b.key = 'nitrous'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: Drug Interactions As with all drugs, the potential for interaction by a variety of mechanisms is a possibility. Alcohol A single dose of ethanol (0.5 g/kg) had no effect on the pharmacokinetics of ven...'
FROM public.substances a, public.substances b
WHERE a.key = 'amphetamine' AND b.key = 'alprazolam'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'amphetamine' AND b.key = 'kratom'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'amphetamine' AND b.key = 'zolpidem'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: Drug Interactions Concurrent use of Ismelin and rauwolfia derivatives may cause excessive postural hypotension, bradycardia, and mental depression. Both digitalis and Ismelin slow the heart rate. Thia...'
FROM public.substances a, public.substances b
WHERE a.key = 'amphetamine' AND b.key = 'methylphenidate'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: 7 DRUG INTERACTIONS No specific drug interaction studies have been conducted with Promethazine and Phenylephrine HCl and Codeine Phosphate Oral Solution. Serotonergic Drugs : Concomitant use may resul...'
FROM public.substances a, public.substances b
WHERE a.key = 'amphetamine' AND b.key = 'pregabalin'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'amphetamine' AND b.key = 'dph'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'amphetamine' AND b.key = 'muscimol'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: 7 DRUG INTERACTIONS Ioflupane I 123 binds to the dopamine transporter [ see Clinical Pharmacology ( 12.1 ) ]. Drugs that bind to the dopamine transporter with high affinity may interfere with the imag...'
FROM public.substances a, public.substances b
WHERE a.key = 'amphetamine' AND b.key = 'modafinil'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: 7 DRUG INTERACTIONS No specific drug interaction studies have been conducted with promethazine HCl, phenylephrine HCl and codeine phosphate oral solution. • Serotonergic Drugs: Concomitant use may res...'
FROM public.substances a, public.substances b
WHERE a.key = 'amphetamine' AND b.key = 'morphine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'amphetamine' AND b.key = 'scopolamine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'amphetamine' AND b.key = 'oxycodone'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: Drug Interactions MAO Inhibitors Concomitant use of MAOIs and CNS stimulants can cause hypertensive crisis. Potential outcomes include death, stroke, myocardial infarction, aortic dissection, ophthalm...'
FROM public.substances a, public.substances b
WHERE a.key = 'amphetamine' AND b.key = 'fentanyl'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: Drug Interactions As with all drugs, the potential for interaction by a variety of mechanisms is a possibility. Alcohol A single dose of ethanol (0.5 g/kg) had no effect on the pharmacokinetics of ven...'
FROM public.substances a, public.substances b
WHERE a.key = 'amphetamine' AND b.key = 'pcp'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'amphetamine' AND b.key = 'quetiapine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'amphetamine' AND b.key = 'mescaline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'amphetamine' AND b.key = 'heroin'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'amphetamine' AND b.key = 'phenibut'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: Drug Interactions MAO Inhibitors Concomitant use of MAOIs and CNS stimulants can cause hypertensive crisis. Potential outcomes include death, stroke, myocardial infarction, aortic dissection, ophthalm...'
FROM public.substances a, public.substances b
WHERE a.key = 'amphetamine' AND b.key = 'tramadol'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'amphetamine' AND b.key = 'memantine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: 7 DRUG INTERACTIONS No specific drug interaction studies have been conducted with promethazine HCl, phenylephrine HCl and codeine phosphate oral solution. • Serotonergic Drugs: Concomitant use may res...'
FROM public.substances a, public.substances b
WHERE a.key = 'amphetamine' AND b.key = 'bupropion'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: Drug Interactions MAO Inhibitors Concomitant use of MAOIs and CNS stimulants can cause hypertensive crisis. Potential outcomes include death, stroke, myocardial infarction, aortic dissection, ophthalm...'
FROM public.substances a, public.substances b
WHERE a.key = 'amphetamine' AND b.key = 'selegiline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'amphetamine' AND b.key = 'ldopa'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'amphetamine' AND b.key = 'yohimbine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: Drug Interactions As with all drugs, the potential for interaction by a variety of mechanisms is a possibility. Alcohol A single dose of ethanol (0.5 g/kg) had no effect on the pharmacokinetics of ven...'
FROM public.substances a, public.substances b
WHERE a.key = 'amphetamine' AND b.key = 'venlafaxine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: Drug Interactions Concurrent use of Ismelin and rauwolfia derivatives may cause excessive postural hypotension, bradycardia, and mental depression. Both digitalis and Ismelin slow the heart rate. Thia...'
FROM public.substances a, public.substances b
WHERE a.key = 'amphetamine' AND b.key = 'amitriptyline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'amphetamine' AND b.key = '3mmc'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'ketamine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'psilocybin'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'cbd'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'dmt'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'dxm'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = '2cb'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: 7 DRUG INTERACTIONS Table 1 includes clinically significant drug interactions with Butalbital, Acetaminophen, Caffeine, and Codeine Phosphate Capsules. Table 1: Clinically Significant Drug Interaction...'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'caffeine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'nicotine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'salvia'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'nitrous'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: 7 DRUG INTERACTIONS • Use with Opioids: Increase the risk of respiratory depression. ( 7.1 ) • Use with Other CNS Depressants: Produces additive CNS depressant effects. ( 7.1 ) • Use with Digoxin: Inc...'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'alprazolam'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'methamphetamine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: DRUG INTERACTIONS This drug should not be used with the following medications because very serious interactions may occur: sodium oxybate. Avoid MAO inhibitors (isocarboxazid, linezolid, methylene blu...'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'zolpidem'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: Drug Interactions Potential interactions between Cesamet 2 mg, and diazepam 5 mg; sodium secobarbital 100 mg; alcohol 45 mL (absolute laboratory alcohol); or codeine 65 mg, were evaluated in 15 subjec...'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'thc'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'methylphenidate'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: 7 DRUG INTERACTIONS Table 1 includes clinically significant drug interactions with Codeine Sulfate Tablets. Table 1: Clinically Significant Drug Interactions with Codeine Sulfate Tablets Inhibitors of...'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'pregabalin'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'dph'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'muscimol'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'modafinil'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: 7 DRUG INTERACTIONS Table 1 includes clinically significant drug interactions with Butalbital, Acetaminophen, Caffeine, and Codeine Phosphate Capsules. Table 1: Clinically Significant Drug Interaction...'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'morphine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: Drug Interactions Potential interactions between Cesamet 2 mg, and diazepam 5 mg; sodium secobarbital 100 mg; alcohol 45 mL (absolute laboratory alcohol); or codeine 65 mg, were evaluated in 15 subjec...'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'scopolamine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: 7 DRUG INTERACTIONS Table 1 includes clinically significant drug interactions with Butalbital, Acetaminophen, Caffeine, and Codeine Phosphate Capsules. Table 1: Clinically Significant Drug Interaction...'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'oxycodone'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: 7 DRUG INTERACTIONS • Use with Opioids: Increase the risk of respiratory depression. ( 7.1 ) • Use with Other CNS Depressants: Produces additive CNS depressant effects. ( 7.1 ) • Use with Digoxin: Inc...'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'fentanyl'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'pcp'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'quetiapine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'mescaline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'heroin'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'phenibut'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: 7 DRUG INTERACTIONS Table 1 includes clinically significant drug interactions with Butalbital, Acetaminophen, Caffeine, and Codeine Phosphate Capsules. Table 1: Clinically Significant Drug Interaction...'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'tramadol'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'memantine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: 7 DRUG INTERACTIONS Table 1 includes clinically significant drug interactions with Butalbital, Acetaminophen, Caffeine, and Codeine Phosphate Capsules. Table 1: Clinically Significant Drug Interaction...'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'bupropion'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: DRUG INTERACTIONS This drug should not be used with the following medications because very serious interactions may occur: sodium oxybate. Avoid MAO inhibitors (isocarboxazid, linezolid, methylene blu...'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'selegiline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'ldopa'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'yohimbine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'venlafaxine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: Drug Interactions Potential interactions between Cesamet 2 mg, and diazepam 5 mg; sodium secobarbital 100 mg; alcohol 45 mL (absolute laboratory alcohol); or codeine 65 mg, were evaluated in 15 subjec...'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = 'amitriptyline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'codeine' AND b.key = '3mmc'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'ketamine' AND b.key = 'cbd'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'ketamine' AND b.key = 'dmt'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: Drug Interactions Many drugs affect thyroid hormone pharmacokinetics and metabolism (e.g., absorption, synthesis, secretion, catabolism, protein binding, and target tissue response) and may alter the ...'
FROM public.substances a, public.substances b
WHERE a.key = 'ketamine' AND b.key = 'diazepam'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'ketamine' AND b.key = 'dxm'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: Drug Interactions: Theophylline interacts with a wide variety of drugs. The interaction may be pharmacodynamic, i.e., alterations in the therapeutic response to theophylline or another drug or occurre...'
FROM public.substances a, public.substances b
WHERE a.key = 'ketamine' AND b.key = 'caffeine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: 7 DRUG INTERACTIONS No drug-drug interaction studies have been conducted with NAMENDA XR, specifically. Use with other NMDA antagonists (amantadine, ketamine, and dextromethorphan) has not been system...'
FROM public.substances a, public.substances b
WHERE a.key = 'ketamine' AND b.key = 'nicotine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'ketamine' AND b.key = 'alprazolam'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'ketamine' AND b.key = 'methamphetamine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'ketamine' AND b.key = 'kratom'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'ketamine' AND b.key = 'zolpidem'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: Drug Interactions Effect of Concomitant Use of Benzodiazepines and Opioids The concomitant use of benzodiazepines and opioids increases the risk of respiratory depression because of actions at differe...'
FROM public.substances a, public.substances b
WHERE a.key = 'ketamine' AND b.key = 'methylphenidate'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'ketamine' AND b.key = 'pregabalin'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'ketamine' AND b.key = 'dph'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'ketamine' AND b.key = 'muscimol'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'ketamine' AND b.key = 'modafinil'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: Drug Interactions Effect of Concomitant Use of Benzodiazepines and Opioids The concomitant use of benzodiazepines and opioids increases the risk of respiratory depression because of actions at differe...'
FROM public.substances a, public.substances b
WHERE a.key = 'ketamine' AND b.key = 'morphine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: Drug Interactions Effect of Concomitant Use of Benzodiazepines and Opioids The concomitant use of benzodiazepines and opioids increases the risk of respiratory depression because of actions at differe...'
FROM public.substances a, public.substances b
WHERE a.key = 'ketamine' AND b.key = 'scopolamine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'ketamine' AND b.key = 'oxycodone'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: Drug Interactions Effect of Concomitant Use of Benzodiazepines and Opioids The concomitant use of benzodiazepines and opioids increases the risk of respiratory depression because of actions at differe...'
FROM public.substances a, public.substances b
WHERE a.key = 'ketamine' AND b.key = 'fentanyl'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'ketamine' AND b.key = 'pcp'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'ketamine' AND b.key = 'quetiapine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'ketamine' AND b.key = 'mescaline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: Drug Interactions Many drugs affect thyroid hormone pharmacokinetics and metabolism (e.g., absorption, synthesis, secretion, catabolism, protein binding, and target tissue response) and may alter the ...'
FROM public.substances a, public.substances b
WHERE a.key = 'ketamine' AND b.key = 'heroin'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'ketamine' AND b.key = 'phenibut'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'ketamine' AND b.key = 'tramadol'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: 7 DRUG INTERACTIONS 7. 1 Drugs that Make the Urine Alkaline The clearance of memantine was reduced by about 80% under alkaline urine conditions at pH 8. Therefore, alterations of urine pH towards the ...'
FROM public.substances a, public.substances b
WHERE a.key = 'ketamine' AND b.key = 'memantine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: 7 DRUG INTERACTIONS No drug-drug interaction studies have been conducted with NAMENDA XR, specifically. Use with other NMDA antagonists (amantadine, ketamine, and dextromethorphan) has not been system...'
FROM public.substances a, public.substances b
WHERE a.key = 'ketamine' AND b.key = 'bupropion'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'ketamine' AND b.key = 'selegiline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'ketamine' AND b.key = 'ldopa'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'ketamine' AND b.key = 'yohimbine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'ketamine' AND b.key = 'venlafaxine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: Drug Interactions Many drugs affect thyroid hormone pharmacokinetics and metabolism (e.g., absorption, synthesis, secretion, catabolism, protein binding, and target tissue response) and may alter the ...'
FROM public.substances a, public.substances b
WHERE a.key = 'ketamine' AND b.key = 'amitriptyline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'ketamine' AND b.key = '3mmc'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'psilocybin' AND b.key = 'diazepam'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'psilocybin' AND b.key = 'ghb'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'psilocybin' AND b.key = 'caffeine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'psilocybin' AND b.key = 'nicotine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'psilocybin' AND b.key = 'salvia'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'psilocybin' AND b.key = 'alprazolam'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'psilocybin' AND b.key = 'methamphetamine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'psilocybin' AND b.key = 'kratom'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'psilocybin' AND b.key = 'zolpidem'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'psilocybin' AND b.key = 'methylphenidate'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'psilocybin' AND b.key = 'pregabalin'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'psilocybin' AND b.key = 'dph'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'psilocybin' AND b.key = 'muscimol'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'psilocybin' AND b.key = 'modafinil'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'psilocybin' AND b.key = 'morphine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'psilocybin' AND b.key = 'scopolamine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'psilocybin' AND b.key = 'oxycodone'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'psilocybin' AND b.key = 'fentanyl'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'psilocybin' AND b.key = 'pcp'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'psilocybin' AND b.key = 'quetiapine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'psilocybin' AND b.key = 'mescaline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'psilocybin' AND b.key = 'heroin'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'psilocybin' AND b.key = 'phenibut'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'psilocybin' AND b.key = 'tramadol'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'psilocybin' AND b.key = 'memantine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'psilocybin' AND b.key = 'bupropion'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'psilocybin' AND b.key = 'selegiline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'psilocybin' AND b.key = 'ldopa'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'psilocybin' AND b.key = 'yohimbine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'psilocybin' AND b.key = 'venlafaxine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'psilocybin' AND b.key = 'amitriptyline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'psilocybin' AND b.key = '3mmc'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'lsd' AND b.key = 'caffeine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'lsd' AND b.key = 'nicotine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'lsd' AND b.key = 'kratom'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'lsd' AND b.key = 'zolpidem'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'lsd' AND b.key = 'methylphenidate'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'lsd' AND b.key = 'pregabalin'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'lsd' AND b.key = 'dph'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'lsd' AND b.key = 'muscimol'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'lsd' AND b.key = 'modafinil'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'lsd' AND b.key = 'morphine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'lsd' AND b.key = 'scopolamine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'lsd' AND b.key = 'oxycodone'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'lsd' AND b.key = 'fentanyl'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'lsd' AND b.key = 'pcp'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'lsd' AND b.key = 'quetiapine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'lsd' AND b.key = 'mescaline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'lsd' AND b.key = 'heroin'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'lsd' AND b.key = 'phenibut'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'lsd' AND b.key = 'tramadol'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'lsd' AND b.key = 'memantine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'lsd' AND b.key = 'bupropion'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'lsd' AND b.key = 'selegiline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'lsd' AND b.key = 'ldopa'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'lsd' AND b.key = 'yohimbine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'lsd' AND b.key = 'venlafaxine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'lsd' AND b.key = 'amitriptyline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'lsd' AND b.key = '3mmc'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = 'dmt'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = 'diazepam'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = 'dxm'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = 'ghb'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = '2cb'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = 'caffeine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = 'nicotine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = 'salvia'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = 'nitrous'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = 'alprazolam'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = 'methamphetamine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = 'kratom'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = 'zolpidem'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = 'methylphenidate'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = 'pregabalin'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = 'dph'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = 'muscimol'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = 'modafinil'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = 'morphine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = 'scopolamine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = 'oxycodone'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = 'fentanyl'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = 'pcp'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = 'quetiapine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = 'mescaline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = 'heroin'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = 'phenibut'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = 'tramadol'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = 'memantine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = 'bupropion'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = 'selegiline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = 'ldopa'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = 'yohimbine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = 'venlafaxine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = 'amitriptyline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'cbd' AND b.key = '3mmc'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = 'diazepam'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = 'dxm'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = 'ghb'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = 'caffeine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = 'alcohol'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = 'nicotine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = 'salvia'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = 'nitrous'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = 'alprazolam'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = 'methamphetamine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = 'kratom'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = 'zolpidem'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = 'methylphenidate'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = 'pregabalin'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = 'dph'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = 'muscimol'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = 'modafinil'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = 'morphine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = 'scopolamine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = 'oxycodone'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = 'fentanyl'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = 'pcp'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = 'quetiapine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = 'mescaline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = 'heroin'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = 'phenibut'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = 'tramadol'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = 'memantine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = 'bupropion'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = 'selegiline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = 'ldopa'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = 'yohimbine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = 'venlafaxine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = 'amitriptyline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dmt' AND b.key = '3mmc'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'diazepam' AND b.key = 'dxm'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'diazepam' AND b.key = '2cb'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: Drug Interactions As with all drugs, the potential for interaction by a variety of mechanisms is a possibility. Alcohol A single dose of ethanol (0.5 g/kg) had no effect on the pharmacokinetics of ven...'
FROM public.substances a, public.substances b
WHERE a.key = 'diazepam' AND b.key = 'caffeine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'diazepam' AND b.key = 'nicotine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'diazepam' AND b.key = 'salvia'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: 7 DRUG INTERACTIONS Table 2 includes clinically significant drug interactions with Alfentanil HCl Injection. Table 2: Clinically Significant Drug Interactions with Alfentanil HCl Injection Inhibitors ...'
FROM public.substances a, public.substances b
WHERE a.key = 'diazepam' AND b.key = 'nitrous'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: 7 DRUG INTERACTIONS When co-administering ritonavir with other protease inhibitors (atazanavir, darunavir, fosamprenavir, saquinavir, and tipranavir), see the full prescribing information for that pro...'
FROM public.substances a, public.substances b
WHERE a.key = 'diazepam' AND b.key = 'methamphetamine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: 7. DRUG INTERACTIONS Tables 3 and 4 include drugs with clinically important drug interactions and interaction with diagnostics when administered concomitantly with Omeprazole delayed-release capsules ...'
FROM public.substances a, public.substances b
WHERE a.key = 'diazepam' AND b.key = 'thc'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: Drug-Drug Interactions The existence of multiple pathways for armodafinil metabolism, as well as the fact that a non-CYP-related pathway is the most rapid in metabolizing armodafinil, suggest that the...'
FROM public.substances a, public.substances b
WHERE a.key = 'diazepam' AND b.key = 'methylphenidate'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: 7 DRUG INTERACTIONS Table 2 includes clinically significant drug interactions with Fentanyl Citrate Injection. Table 2: Clinically Significant Drug Interactions with Fentanyl Citrate Injection Inhibit...'
FROM public.substances a, public.substances b
WHERE a.key = 'diazepam' AND b.key = 'pregabalin'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'diazepam' AND b.key = 'dph'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'diazepam' AND b.key = 'muscimol'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: 7 DRUG INTERACTIONS Effects of Modafinil on CYP3A4/5 Substrates The clearance of drugs that are substrates for CYP3A4/5 (e.g., steroidal contraceptives, cyclosporine, midazolam, and triazolam) may be ...'
FROM public.substances a, public.substances b
WHERE a.key = 'diazepam' AND b.key = 'modafinil'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: Drug Interactions Pharmacodynamic Interactions Healthy subjects who received rifampin 600 mg once daily concomitantly with saquinavir 1000 mg/ritonavir 100 mg twice daily (ritonavir-boosted saquinavir...'
FROM public.substances a, public.substances b
WHERE a.key = 'diazepam' AND b.key = 'morphine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: Drug Interactions: Effect of Concomitant Use of Benzodiazepines and Opioids The concomitant use of benzodiazepines and opioids increases the risk of respiratory depression because of actions at differ...'
FROM public.substances a, public.substances b
WHERE a.key = 'diazepam' AND b.key = 'scopolamine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: Drug Interactions Pharmacodynamic Interactions Healthy subjects who received rifampin 600 mg once daily concomitantly with saquinavir 1000 mg/ritonavir 100 mg twice daily (ritonavir-boosted saquinavir...'
FROM public.substances a, public.substances b
WHERE a.key = 'diazepam' AND b.key = 'oxycodone'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: 7 DRUG INTERACTIONS Table 5 includes clinically important drug interactions with REMERON/REMERONSolTab [see Clinical Pharmacology (12.3) ]. Table 5: Clinically Important Drug Interactions with REMERON...'
FROM public.substances a, public.substances b
WHERE a.key = 'diazepam' AND b.key = 'fentanyl'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: Drug Interactions As with all drugs, the potential for interaction by a variety of mechanisms is a possibility. Alcohol A single dose of ethanol (0.5 g/kg) had no effect on the pharmacokinetics of ven...'
FROM public.substances a, public.substances b
WHERE a.key = 'diazepam' AND b.key = 'pcp'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: Drug Interactions Clinically meaningful drug interactions have occurred with concomitant medications and include, but are not limited to the following: Agents Highly Bound to Plasma Protein: Carbamaze...'
FROM public.substances a, public.substances b
WHERE a.key = 'diazepam' AND b.key = 'quetiapine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'diazepam' AND b.key = 'mescaline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: Drug Interactions Many drugs affect thyroid hormone pharmacokinetics and metabolism (e.g., absorption, synthesis, secretion, catabolism, protein binding, and target tissue response) and may alter the ...'
FROM public.substances a, public.substances b
WHERE a.key = 'diazepam' AND b.key = 'heroin'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'diazepam' AND b.key = 'phenibut'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: 7 DRUG INTERACTIONS Table 5 includes clinically important drug interactions with REMERON/REMERONSolTab [see Clinical Pharmacology (12.3) ]. Table 5: Clinically Important Drug Interactions with REMERON...'
FROM public.substances a, public.substances b
WHERE a.key = 'diazepam' AND b.key = 'tramadol'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'diazepam' AND b.key = 'memantine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: Drug Interactions Clinically meaningful drug interactions have occurred with concomitant medications and include, but are not limited to the following: Agents Highly Bound to Plasma Protein: Carbamaze...'
FROM public.substances a, public.substances b
WHERE a.key = 'diazepam' AND b.key = 'bupropion'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: 7 DRUG INTERACTIONS Table 5 includes clinically important drug interactions with REMERON/REMERONSolTab [see Clinical Pharmacology (12.3) ]. Table 5: Clinically Important Drug Interactions with REMERON...'
FROM public.substances a, public.substances b
WHERE a.key = 'diazepam' AND b.key = 'selegiline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'diazepam' AND b.key = 'ldopa'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'diazepam' AND b.key = 'yohimbine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: Drug Interactions As with all drugs, the potential for interaction by a variety of mechanisms is a possibility. Alcohol A single dose of ethanol (0.5 g/kg) had no effect on the pharmacokinetics of ven...'
FROM public.substances a, public.substances b
WHERE a.key = 'diazepam' AND b.key = 'venlafaxine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'caution', 'Znaleziono wzmianki w bazie OpenFDA. Wymaga weryfikacji. Tekst źródłowy: 7 DRUG INTERACTIONS Hepatic enzyme-inducing drugs (e.g., phenytoin, carbamazepine, phenobarbital, primidone, rifampin) can increase valproate clearance, while enzyme inhibitors (e.g., felbamate) can d...'
FROM public.substances a, public.substances b
WHERE a.key = 'diazepam' AND b.key = 'amitriptyline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'diazepam' AND b.key = '3mmc'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dxm' AND b.key = 'ghb'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dxm' AND b.key = '2cb'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dxm' AND b.key = 'caffeine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dxm' AND b.key = 'nicotine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dxm' AND b.key = 'salvia'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dxm' AND b.key = 'nitrous'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dxm' AND b.key = 'alprazolam'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dxm' AND b.key = 'methamphetamine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dxm' AND b.key = 'kratom'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dxm' AND b.key = 'zolpidem'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dxm' AND b.key = 'thc'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dxm' AND b.key = 'methylphenidate'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dxm' AND b.key = 'pregabalin'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dxm' AND b.key = 'dph'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dxm' AND b.key = 'muscimol'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dxm' AND b.key = 'modafinil'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dxm' AND b.key = 'morphine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dxm' AND b.key = 'scopolamine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dxm' AND b.key = 'oxycodone'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dxm' AND b.key = 'fentanyl'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dxm' AND b.key = 'pcp'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dxm' AND b.key = 'quetiapine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dxm' AND b.key = 'mescaline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dxm' AND b.key = 'heroin'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dxm' AND b.key = 'phenibut'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dxm' AND b.key = 'tramadol'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dxm' AND b.key = 'memantine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dxm' AND b.key = 'bupropion'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dxm' AND b.key = 'selegiline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dxm' AND b.key = 'ldopa'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dxm' AND b.key = 'yohimbine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dxm' AND b.key = 'venlafaxine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dxm' AND b.key = 'amitriptyline'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'dxm' AND b.key = '3mmc'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'ghb' AND b.key = '2cb'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'ghb' AND b.key = 'caffeine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'ghb' AND b.key = 'nicotine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'ghb' AND b.key = 'salvia'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'ghb' AND b.key = 'nitrous'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'ghb' AND b.key = 'alprazolam'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'ghb' AND b.key = 'methamphetamine'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);

INSERT INTO public.interactions (substance_a_id, substance_b_id, risk, description_pl)
SELECT a.id, b.id, 'low_no_interaction', 'Brak udokumentowanych interakcji.'
FROM public.substances a, public.substances b
WHERE a.key = 'ghb' AND b.key = 'kratom'
AND NOT EXISTS (
    SELECT 1 FROM public.interactions i
    WHERE (i.substance_a_id = a.id AND i.substance_b_id = b.id)
       OR (i.substance_a_id = b.id AND i.substance_b_id = a.id)
);
COMMIT;

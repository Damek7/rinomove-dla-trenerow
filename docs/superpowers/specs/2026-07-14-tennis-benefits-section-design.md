# Sekcja tenisowa „Dlaczego RinoMove”

## Cel

Przebudować istniejącą ciemną sekcję `#narzedzia`, aby wizualnie odpowiadała przesłanej referencji: fotografia sportowa po lewej i wyrazisty panel informacyjny po prawej. Sekcja ma przekonywać trenerów, że RinoMove ogranicza administrację i pomaga rozwijać ich działalność.

## Zakres

Zmiana obejmuje wyłącznie sekcję `#narzedzia` w `index.html` oraz wykorzystanie istniejącej fotografii `assets/tennis-back-serve.png`. Nie zmieniamy pozostałych sekcji, nawigacji, formularza ani działania strony.

## Układ desktopowy

- Sekcja zajmuje całą szerokość okna i tworzy układ dwóch równych kolumn.
- Lewa kolumna zawiera pełnoformatową fotografię tenisową bez zaokrągleń i bez odstępu od krawędzi panelu.
- Zdjęcie wypełnia kolumnę przez `object-fit: cover`; punkt kadrowania powinien zachować czytelną sylwetkę tenisisty.
- Prawa kolumna ma niemal czarne tło zgodne z obecną paletą projektu.
- Obie kolumny mają tę samą wysokość, z odpowiednio dużym oddechem pionowym w panelu tekstowym.

## Treść prawego panelu

Nad nagłówkiem pojawia się mała, wersalikowa etykieta:

`04 / DLACZEGO RINOMOVE`

Główny nagłówek:

`WIĘCEJ TRENINGÓW. MNIEJ ADMINISTRACJI.`

Pod nagłówkiem znajdują się trzy wiersze oddzielone subtelnymi liniami:

1. `01` — **Nowi klienci** — Profil, który zamienia zainteresowanie w rezerwacje.
2. `02` — **Terminy pod kontrolą** — Kalendarz i kontakt w jednym miejscu.
3. `03` — **Proste płatności** — Mniej wiadomości, przypomnień i przelewów.

Numer, tytuł i opis tworzą trzy czytelne kolumny. Nagłówek ma dominować skalą, a wiersze pozostają bardziej techniczne i oszczędne, zgodnie z referencją.

## Typografia i wykończenie

- Używamy istniejących fontów projektu: Manrope dla nagłówków i DM Sans dla opisów.
- Nagłówek jest biały, bardzo duży, ciężki i zwarty; jego rozmiar reaguje przez `clamp()`.
- Etykieta i opisy używają przygaszonej bieli lub szarości, a numery wykorzystują istniejący niebieski kolor marki.
- Brak kart, zaokrągleń i dekoracyjnych cieni w obrębie tej sekcji.
- Linie pomiędzy korzyściami są cienkie i półprzezroczyste.

## Zachowanie responsywne

- Powyżej 900 px sekcja zachowuje dwie równe kolumny.
- Przy szerokości 900 px i mniejszej sekcja przechodzi w jedną kolumnę: fotografia jest pierwsza, panel tekstowy drugi.
- Mobilne zdjęcie ma kontrolowaną wysokość, aby nie wypychało treści poza pierwszy ekran.
- Wiersze korzyści upraszczają się do numeru obok bloku z tytułem i opisem; tekst nie może być ściskany w trzy wąskie kolumny.

## Dostępność

- Fotografia zachowuje opis alternatywny odnoszący się do tenisisty podczas serwisu.
- Kontrast białego i szarego tekstu na ciemnym tle pozostaje czytelny.
- Hierarchia nagłówków strony nie zmienia się: sekcja nadal używa `h2`.
- Sekcja nie dodaje animacji ani elementów interaktywnych.

## Kryteria odbioru

- Na desktopie fotografia jest po lewej, a czarny panel z tekstem po prawej.
- Sekcja nie korzysta już ze zdjęcia trenera boksu.
- Etykieta, nagłówek i trzy korzyści mają dokładnie zatwierdzoną treść.
- Układ 50/50 nie ma przerwy ani zaokrągleń między fotografią a panelem.
- Na telefonie fotografia znajduje się nad panelem, a wszystkie teksty są czytelne bez przewijania poziomego.
- Pozostałe sekcje strony pozostają bez zmian.

## Weryfikacja

- Uruchomić stronę lokalnie i wykonać zrzut sekcji w widoku desktopowym oraz mobilnym.
- Sprawdzić brak przewijania poziomego i poprawność kadrowania fotografii.
- Porównać wizualnie hierarchię, proporcje i rytm wierszy z dostarczoną referencją.

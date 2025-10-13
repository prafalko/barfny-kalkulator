# Dokument wymagań produktu (PRD) - QuizCards
## 1. Przegląd produktu
QuizCards to aplikacja internetowa zaprojektowana w celu ulepszenia procesu nauki dla studentów, zwłaszcza kierunków medycznych. Aplikacja generuje quizy wielokrotnego wyboru z publicznych zestawów fiszek na Quizlet.com. Kluczową funkcją jest wykorzystanie sztucznej inteligencji do tworzenia trzech wiarygodnych, kontekstowo pasujących, ale nieprawidłowych odpowiedzi (dystraktorów) do każdego pytania, co rozwiązuje problem nieadekwatnych odpowiedzi generowanych przez Quizlet. Użytkownicy mogą zarządzać swoimi quizami, edytować je i rozwiązywać, a wszystko to w ramach prostego i bezpiecznego środowiska.

## 2. Problem użytkownika
Głównym problemem, który rozwiązuje QuizCards, jest niska jakość automatycznie generowanych quizów w Quizlet. W przypadku zróżnicowanych zestawów fiszek, fałszywe odpowiedzi są często losowymi odpowiedziami z innych fiszek, które nie pasują do kontekstu pytania. To sprawia, że testy są nieefektywne, ponieważ odgadnięcie prawidłowej odpowiedzi jest zbyt łatwe. Studenci potrzebują narzędzia, które tworzy trudniejsze i bardziej realistyczne pytania testowe, z dystraktorami, które faktycznie sprawdzają ich wiedzę na dany temat.

## 3. Wymagania funkcjonalne
- RF-001: System uwierzytelniania użytkowników: Użytkownicy muszą mieć możliwość zakładania kont (nazwa, hasło).
- RF-002: Aktywacja konta przez administratora: Każde nowo utworzone konto musi zostać ręcznie zatwierdzone przez administratora, zanim użytkownik uzyska dostęp do pełnej funkcjonalności.
- RF-003: Ograniczenie dostępu do aplikacji: Cała aplikacja będzie hostowana na serwerze z dostępem ograniczonym przez basic auth.
- RF-004: Import fiszek z Quizlet: Użytkownicy muszą mieć możliwość wklejenia publicznego linku do zestawu fiszek na Quizlet.com w celu zaimportowania danych.
- RF-005: Generowanie quizu przez AI: System wykorzystuje AI do generowania pytań wielokrotnego wyboru. Każde pytanie zawiera jedną prawidłową odpowiedź (z fiszki) i trzy wiarygodne, kontekstowo dopasowane dystraktory.
- RF-006: Zarządzanie quizami: Użytkownik może zapisywać wygenerowane quizy na swoim koncie, a także edytować ich tytuł i opis.
- RF-007: Edycja pytań i odpowiedzi: Użytkownik ma możliwość przeglądania i edytowania treści każdego pytania oraz odpowiedzi.
- RF-008: Oznaczanie prawidłowej odpowiedzi: Użytkownik może oznaczyć, która odpowiedź w pytaniu jest prawidłowa, za pomocą przycisku radio.
- RF-009: Rozwiązywanie quizu: Aplikacja zapewnia tryb rozwiązywania quizu, w którym pytania i odpowiedzi są prezentowane w losowej kolejności.
- RF-010: Podsumowanie wyników: Po zakończeniu quizu użytkownik otrzymuje podsumowanie wyników.
- RF-011: Logowanie jakości generowanych pytań: System rejestruje akcje użytkownika na wygenerowanych pytaniach (zaakceptowane, odrzucone, edytowane) w celu oceny skuteczności AI.
- RF-012: Obsługa błędów: Aplikacja wyświetla komunikaty o błędach (np. podczas importu lub generowania AI) i oferuje opcję ponowienia próby.

## 4. Granice produktu
Następujące funkcje celowo nie wchodzą w zakres MVP:
- Przechowywanie historii wyników rozwiązanych quizów.
- Integracja z kontem Quizlet (np. import prywatnych zestawów).
- Import fiszek z innych źródeł niż publiczne linki Quizlet (np. pliki APKG, PDF, DOCX, TXT).
- Współdzielenie quizów między użytkownikami.
- Integracje z innymi platformami edukacyjnymi.
- Aplikacje mobilne.
- Automatyczne generowanie notatek z fiszek.

## 5. Historyjki użytkowników

### Dostęp i Uwierzytelnianie
- ID: US-001
- Tytuł: Dostęp do aplikacji chronionej hasłem
- Opis: Jako dowolny użytkownik, chcę uzyskać dostęp do aplikacji, która jest chroniona globalnym hasłem (basic auth), aby zapewnić, że tylko uprawnione osoby mogą z niej korzystać.
- Kryteria akceptacji:
  - Gdy użytkownik próbuje otworzyć aplikację, przeglądarka wyświetla okno dialogowe basic auth.
  - Użytkownik musi podać prawidłową nazwę użytkownika i hasło, aby uzyskać dostęp do strony logowania/rejestracji.
  - W przypadku podania nieprawidłowych danych, dostęp jest blokowany.

- ID: US-002
- Tytuł: Rejestracja nowego konta użytkownika
- Opis: Jako nowy użytkownik, chcę móc zarejestrować konto w aplikacji, podając nazwę użytkownika i hasło, abym mógł w przyszłości tworzyć i zapisywać quizy.
- Kryteria akceptacji:
  - Formularz rejestracji zawiera pola na nazwę użytkownika i hasło.
  - Po pomyślnej rejestracji, widzę komunikat informujący, że moje konto oczekuje na aktywację przez administratora.
  - Nie mogę zalogować się na nowo utworzone konto, dopóki nie zostanie aktywowane.
  - System nie pozwala na rejestrację konta z już istniejącą nazwą użytkownika.

- ID: US-003
- Tytuł: Logowanie do aplikacji
- Opis: Jako zarejestrowany i aktywowany użytkownik, chcę móc zalogować się na swoje konto, aby uzyskać dostęp do moich quizów i funkcji aplikacji.
- Kryteria akceptacji:
  - Mogę zalogować się, używając mojej nazwy użytkownika i hasła.
  - Jeśli podam błędne dane, widzę komunikat o błędzie.
  - Użytkownik, którego konto nie zostało aktywowane, nie może się zalogować i widzi odpowiedni komunikat.

### Administracja Użytkownikami
- ID: US-004
- Tytuł: Przeglądanie listy użytkowników do aktywacji
- Opis: Jako administrator, chcę widzieć listę nowo zarejestrowanych użytkowników oczekujących na aktywację, abym mógł zarządzać dostępem do aplikacji.
- Kryteria akceptacji:
  - W panelu administratora widzę listę użytkowników ze statusem "oczekujący na aktywację".
  - Lista zawiera nazwę użytkownika i datę rejestracji.

- ID: US-005
- Tytuł: Aktywacja konta użytkownika
- Opis: Jako administrator, chcę móc aktywować konto użytkownika, aby przyznać mu pełny dostęp do funkcjonalności aplikacji.
- Kryteria akceptacji:
  - Mogę wybrać użytkownika z listy oczekujących i zmienić jego status na "aktywny".
  - Po aktywacji, użytkownik znika z listy oczekujących.
  - Aktywowany użytkownik może się zalogować do aplikacji.

- ID: US-006
- Tytuł: Dezaktywacja konta użytkownika
- Opis: Jako administrator, chcę móc dezaktywować istniejące konto użytkownika, aby w razie potrzeby odebrać mu dostęp do aplikacji.
- Kryteria akceptacji:
  - Mogę znaleźć istniejącego użytkownika i zmienić jego status na "nieaktywny".
  - Zdezaktywowany użytkownik nie może się zalogować.

### Tworzenie i Zarządzanie Quizem
- ID: US-007
- Tytuł: Tworzenie nowego quizu z linku Quizlet
- Opis: Jako zalogowany użytkownik, chcę móc wkleić publiczny link do zestawu fiszek na Quizlet.com i zainicjować proces generowania quizu, aby przekształcić fiszki w test.
- Kryteria akceptacji:
  - Na stronie głównej znajduje się pole do wklejenia linku URL.
  - Po wklejeniu prawidłowego linku i kliknięciu przycisku, rozpoczyna się proces importu i generowania pytań.
  - System informuje mnie o postępie generowania.
  - W przypadku podania nieprawidłowego linku, widzę komunikat o błędzie.

- ID: US-008
- Tytuł: Obsługa błędów podczas generowania quizu
- Opis: Jako użytkownik tworzący quiz, w przypadku błędu podczas importu fiszek lub generowania pytań przez AI, chcę zobaczyć czytelny komunikat o błędzie i mieć możliwość ponowienia próby.
- Kryteria akceptacji:
  - Jeśli scraping fiszek się nie powiedzie, wyświetlany jest komunikat błędu z opcją "Spróbuj ponownie".
  - Jeśli generowanie pytań przez AI zawiedzie, wyświetlany jest komunikat błędu z opcją "Spróbuj ponownie".
  - Jako obejście problemu, system oferuje możliwość ręcznego wprowadzenia fiszek, jeśli automatyczny import zawiedzie.

- ID: US-009
- Tytuł: Przeglądanie i edycja wygenerowanego quizu
- Opis: Jako użytkownik, po pomyślnym wygenerowaniu quizu, chcę przejrzeć wszystkie pytania i odpowiedzi, aby zweryfikować ich jakość i dokonać niezbędnych poprawek.
- Kryteria akceptacji:
  - Wyświetlana jest lista wszystkich pytań.
  - Każde pytanie pokazuje treść, prawidłową odpowiedź i trzy dystraktory.
  - Prawidłowa odpowiedź jest domyślnie zaznaczona (np. za pomocą radio buttona).
  - Mogę edytować tekst pytania oraz każdej z odpowiedzi w prostym edytorze tekstowym.
  - Mogę zmienić, która odpowiedź jest oznaczona jako prawidłowa.

- ID: US-010
- Tytuł: Zapisywanie quizu
- Opis: Jako użytkownik, po przejrzeniu i edycji pytań, chcę zapisać quiz na moim koncie, aby móc go później rozwiązać.
- Kryteria akceptacji:
  - Mogę nadać quizowi tytuł i opcjonalny opis.
  - Po kliknięciu przycisku "Zapisz", quiz jest przechowywany na moim koncie.
  - Jestem przekierowywany do listy moich zapisanych quizów.

- ID: US-011
- Tytuł: Przeglądanie listy zapisanych quizów
- Opis: Jako zalogowany użytkownik, chcę widzieć listę wszystkich moich zapisanych quizów, abym mógł łatwo wybrać, który chcę rozwiązać lub edytować.
- Kryteria akceptacji:
  - Dostępna jest strona z listą moich quizów.
  - Każdy element na liście pokazuje tytuł quizu.
  - Z poziomu listy mogę przejść do rozwiązywania lub edycji danego quizu.

### Rozwiązywanie Quizu
- ID: US-012
- Tytuł: Rozpoczynanie quizu
- Opis: Jako użytkownik, chcę móc rozpocząć rozwiązywanie dowolnego z moich zapisanych quizów, aby sprawdzić swoją wiedzę.
- Kryteria akceptacji:
  - Po wybraniu quizu z listy, przechodzę do trybu rozwiązywania.
  - Pytania są prezentowane pojedynczo.
  - Kolejność pytań jest losowa za każdym razem, gdy rozpoczynam quiz.

- ID: US-013
- Tytuł: Odpowiadanie na pytania
- Opis: Jako użytkownik rozwiązujący quiz, chcę móc wybrać jedną odpowiedź na każde pytanie, aby przejść przez cały test.
- Kryteria akceptacji:
  - Dla każdego pytania widzę cztery możliwe odpowiedzi.
  - Kolejność odpowiedzi jest losowa dla każdego pytania.
  - Mogę wybrać tylko jedną odpowiedź.
  - Po wybraniu odpowiedzi przechodzę do następnego pytania.

- ID: US-014
- Tytuł: Zakończenie quizu i wyświetlenie wyników
- Opis: Jako użytkownik, po odpowiedzeniu na wszystkie pytania, chcę zobaczyć podsumowanie mojego wyniku, aby ocenić moją wiedzę.
- Kryteria akceptacji:
  - Po ostatnim pytaniu, quiz automatycznie się kończy.
  - Wyświetlany jest mój końcowy wynik (np. "12/15 poprawnych odpowiedzi" lub "80%").
  - Mam opcję powrotu do listy moich quizów.

## 6. Metryki sukcesu
- Głównym kryterium sukcesu jest jakość generowanych treści. Cel: Osiągnięcie wskaźnika akceptacji na poziomie 75% dla pytań generowanych przez AI.
- Sposób pomiaru: Analiza logów systemowych, które śledzą, ile pytań zostało zaakceptowanych przez użytkowników bez edycji, w stosunku do liczby pytań edytowanych lub odrzuconych.

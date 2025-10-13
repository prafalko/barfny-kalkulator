<conversation_summary>
<decisions>
Grupa docelowa: Studenci kierunków medycznych i pokrewnych, gdzie specjalistyczna wiedza jest słabo rozpowszechniona.
Model biznesowy: Aplikacja będzie darmowa dla zamkniętej grupy do 50 użytkowników w fazie MVP. Brak monetyzacji i limitów funkcjonalności.
Dostawca AI: Rozważane jest Gemini API, ale decyzja pozostaje otwarta. Przetwarzanie fiszek do generowania pytań będzie odbywać się wsadowo (batch processing).
Źródło danych: Aplikacja będzie pobierać dane (fiszki tekst-tekst) poprzez web scraping publicznych zestawów z Quizlet.com. Nie będzie używane oficjalne API.
Zarządzanie użytkownikami: Wymagane są konta użytkowników (nazwa + hasło). Każde nowo utworzone konto musi zostać ręcznie zatwierdzone przez administratora, zanim uzyska dostęp do funkcjonalności tworzenia quizów.
Dostęp do aplikacji: Aplikacja będzie hostowana na serwerze z dostępem ograniczonym przez basic auth.
Zakres funkcjonalny MVP: Aplikacja nie będzie generować notatek. Kluczowe funkcje to: tworzenie quizu z linku Quizlet, generowanie przez AI 3 kontekstowych i wiarygodnych dystraktorów, edycja tytułu/opisu quizu oraz poszczególnych pytań, zapisywanie quizów i ich rozwiązywanie.
Interfejs użytkownika: Edytor pytań będzie prostym edytorem tekstowym. Użytkownik oznaczy prawidłową odpowiedź za pomocą radio buttona.
Proces rozwiązywania quizu: Użytkownik odpowiada na wszystkie pytania, a zbiorczy wynik z informacją zwrotną jest prezentowany na końcu. Kolejność pytań i odpowiedzi jest zawsze losowa.
Logowanie i analityka: System będzie zbierał podstawowe logi dotyczące statusu pytań (zaakceptowane, odrzucone, edytowane) w celu późniejszej analizy jakości generowanych treści.
Obsługa błędów: Zostaną zaimplementowane podstawowe komunikaty o błędach (dla scrapingu i generowania AI) z opcją ponowienia próby oraz ręcznego wprowadzenia fiszek jako mechanizm zapasowy.
</decisions>
<matched_recommendations>
Zdefiniowanie persony użytkownika: Decyzja o skupieniu się na studentach kierunków medycznych jest zgodna z zaleceniem precyzyjnego określenia grupy docelowej.
Prosty edytor dla MVP: Wybór najprostszego edytora tekstowego jest zgodny z rekomendacją, aby unikać nadmiernej inżynierii na wczesnym etapie.
Mechanizm zbierania feedbacku: Wdrożenie logowania statusu pytań realizuje zalecenie dotyczące monitorowania jakości generowanych treści w celu osiągnięcia kryteriów sukcesu.
Uproszczony User Flow: Zdefiniowany 5-etapowy proces od linku do rozwiązania quizu jest zgodny z rekomendacją zaprojektowania klarownej ścieżki użytkownika.
Podstawowa obsługa błędów z fallbackiem: Implementacja komunikatów o błędach i opcji ręcznego wprowadzania danych jest zgodna z zaleceniem zapewnienia ciągłości działania aplikacji.
Ograniczenie dostępu dla grupy zamkniętej: Wybór basic auth na poziomie serwera jest zgodny z rekomendacją zastosowania prostego mechanizmu kontroli dostępu.
Zdefiniowanie zakresu MVP: Jasne określenie funkcji "must-have" i odrzucenie "nice-to-have" (np. generowanie notatek) jest kluczowe i zgodne z zaleceniami.
Randomizacja pytań i odpowiedzi: Wdrożenie losowej kolejności jest zgodne z rekomendacją mającą na celu zwiększenie efektywności nauki.
</matched_recommendations>
<prd_planning_summary>
Na podstawie przeprowadzonej analizy, poniższe elementy powinny stanowić podstawę do stworzenia Product Requirements Document (PRD) dla MVP aplikacji LearnCards.
a. Główne wymagania funkcjonalne produktu (Must-Have dla MVP):
System uwierzytelniania: Użytkownicy mogą zakładać konta (nazwa, hasło). Administrator musi aktywować konto, aby umożliwić tworzenie quizów. Dostęp do całej aplikacji jest dodatkowo chroniony przez basic auth.
Import fiszek: Możliwość wklejenia publicznego linku do serwisu Quizlet.com w celu zaimportowania fiszek tekstowych.
Generowanie quizu przez AI: Na podstawie zaimportowanych fiszek, system wykorzystuje AI (np. Gemini API) do wygenerowania pytań wielokrotnego wyboru. Każde pytanie zawiera jedną prawidłową odpowiedź (pochodzącą z fiszki) oraz trzy wiarygodne, kontekstowo pasujące, ale nieprawidłowe odpowiedzi (dystraktory).
Zarządzanie quizem: Użytkownik może zapisać wygenerowany quiz na swoim koncie, a także edytować jego tytuł i opis.
Edycja pytań: Użytkownik ma możliwość przeglądania, edytowania treści każdego pytania i odpowiedzi, a także oznaczania poprawnej odpowiedzi za pomocą przycisku radio.
Rozwiązywanie quizu: Tryb rozwiązywania, w którym pytania i odpowiedzi są prezentowane w losowej kolejności. Użytkownik otrzymuje podsumowanie wyników po zakończeniu całego quizu.
Logowanie jakości: System rejestruje akcje użytkownika na wygenerowanych pytaniach (zaakceptowane, odrzucone, edytowane) w celu oceny skuteczności AI.
b. Kluczowe historie użytkownika i ścieżki korzystania:
Ścieżka administratora: Administrator loguje się do panelu, widzi listę nowo zarejestrowanych użytkowników i może aktywować ich konta, aby przyznać im dostęp do tworzenia quizów. Może również dezaktywować istniejące konta.
Ścieżka nowego użytkownika: Nowy użytkownik przechodzi przez basic auth, rejestruje konto i czeka na akceptację administratora.
Ścieżka tworzenia quizu: Aktywny użytkownik loguje się, wkleja link do Quizlet, inicjuje generowanie quizu przez AI, a następnie przegląda i edytuje pytania, po czym zapisuje quiz na swoim koncie.
Ścieżka nauki: Użytkownik wybiera jeden ze swoich zapisanych quizów, rozwiązuje go, a na końcu otrzymuje informację o swoim wyniku.
c. Ważne kryteria sukcesu i sposoby ich mierzenia:
Jakość generowanych treści: Głównym celem jest osiągnięcie wskaźnika akceptacji na poziomie 75% dla pytań generowanych przez AI.
Sposób pomiaru: Analiza logów systemowych, które śledzą, ile pytań zostało zaakceptowanych przez użytkowników bez edycji, w stosunku do liczby pytań edytowanych lub odrzuconych.
</prd_planning_summary>
<unresolved_issues>
Szczegóły techniczne backendu: Należy podjąć decyzję dotyczącą konkretnego frameworka (np. Node.js + Express), bazy danych (np. PostgreSQL, SQLite) oraz dostawcy hostingu (np. Vercel + Supabase, Railway), które zostaną użyte do budowy i wdrożenia aplikacji.
Projekt interfejsu administratora: Należy zdefiniować, jak będzie wyglądał i działał panel administratora do zarządzania kontami użytkowników.
</unresolved_issues>
</conversation_summary>
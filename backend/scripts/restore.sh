#!/bin/bash
# restore.sh – skrypt przywracający całą bazę danych z backupu

# Ustaw zmienne środowiskowe
DB_HOST="localhost"
DB_PORT="5432"
DB_USER="mratuj"
DB_NAME="ratujemy_dane_dev"

# Ścieżka do pliku backupu przekazywana jako pierwszy argument
BACKUP_FILE="$1"

if [ -z "$BACKUP_FILE" ]; then
  echo "Usage: $0 /sciezka/do/backup_file.sql"
  exit 1
fi

# Przywróć bazę danych z backupu przy użyciu psql
psql -h "${DB_HOST}" -p "${DB_PORT}" -U "${DB_USER}" "${DB_NAME}" < "${BACKUP_FILE}"

if [ $? -eq 0 ]; then
  echo "Baza danych została przywrócona z backupu: ${BACKUP_FILE}"
else
  echo "Błąd podczas przywracania bazy danych" >&2
  exit 1
fi

#!/bin/bash
# backup.sh – skrypt tworzący kopię zapasową całej bazy danych

# Ustaw zmienne środowiskowe
DB_HOST="localhost"
DB_PORT="5432"
DB_USER="mratuj"
DB_NAME="ratujemy_dane_dev"
BACKUP_DIR="./backups"
DATE=$(date +"%Y%m%d_%H%M%S")
BACKUP_FILE="${BACKUP_DIR}/${DB_NAME}_full_backup_${DATE}.sql"

# Upewnij się, że katalog backup istnieje
mkdir -p "${BACKUP_DIR}"

# Wykonaj backup całej bazy danych przy użyciu pg_dump
pg_dump -h "${DB_HOST}" -p "${DB_PORT}" -U "${DB_USER}" "${DB_NAME}" > "${BACKUP_FILE}"

if [ $? -eq 0 ]; then
  echo "Backup bazy danych został utworzony: ${BACKUP_FILE}"
else
  echo "Błąd podczas tworzenia backupu bazy danych" >&2
  exit 1
fi

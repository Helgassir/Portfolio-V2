@echo off
echo 🧹 Nettoyage du projet...

rd /s /q node_modules
del package-lock.json
rd /s /q dist
rd /s /q .next
rd /s /q .cache
rd /s /q build

echo 📦 Réinstallation des dépendances...
npm install

echo 🛠️ Build de la version optimisée...
npm run build

echo ✅ Terminé !
pause

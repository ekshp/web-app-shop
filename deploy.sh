#!/bin/bash

# Скрипт для одновременного push в GitHub и Amvera

echo "🚀 Отправляем изменения в GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ GitHub: успешно!"
    
    echo "🚀 Отправляем изменения в Amvera..."
    git push amvera main:master
    
    if [ $? -eq 0 ]; then
        echo "✅ Amvera: успешно!"
        echo "🎉 Все изменения отправлены!"
    else
        echo "❌ Ошибка при отправке в Amvera"
        exit 1
    fi
else
    echo "❌ Ошибка при отправке в GitHub"
    exit 1
fi

@echo off
chcp 65001 >nul
title AI 장소 추가 브리지 (Claude + Codex)
cd /d "%~dp0"
python tools\ai_bridge.py
pause

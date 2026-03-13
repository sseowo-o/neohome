# Task Plan - EN/KO/JA 하위 페이지 전수 점검

## Goal
localhost:3000 vs 원본 사이트 하위 페이지 전수 비교 점검
- EN: localhost:3000/en/neosmartpen/* vs neosmartpen.com/*
- KO: localhost:3000/ko/neosmartpen/* vs neosmartpen.co.kr/*
- JA: localhost:3000/ja/neosmartpen/* vs neosmartpen.jp/*

## 점검 항목 (페이지별)
1. HTTP 200 여부
2. 타이틀 일치
3. 헤딩 수 비교
4. 이미지 수 비교
5. 주요 텍스트 키 누락 여부
6. 섹션 구조 순서 일치

## Phase 1: 하위 페이지 목록 확인 `complete`
- [x] localhost 라우트 목록 추출 (15개)
- [x] 원본 사이트 메뉴/링크 목록 추출 (EN 15, KO 14, JA 9)
- [x] 매핑 테이블 작성

## Phase 2: EN 비교 점검 `complete`
- [x] 14 페이지 비교 → findings_en.md
- 결과: 0 OK, 7 Minor, 5 Major, 1 Critical

## Phase 3: KO 비교 점검 `complete`
- [x] 13 페이지 비교 → findings_ko.md
- 결과: 0 OK, 5 Minor, 8 Major, 0 Critical

## Phase 4: JA 비교 점검 `complete`
- [x] 9 페이지 비교 → findings_ja.md
- 결과: 0 OK, 3 Minor, 3 Major, 3 Critical

## Phase 5: 결과 종합 `complete`
- [x] 이슈 목록 정리 → findings.md (종합 보고서)
- [x] 심각도 분류: 🔴 Critical 3, ❌ Major 6, ⚠️ Minor 5

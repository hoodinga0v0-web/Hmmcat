# Hmmcat · 흠냥이

고양이를 탭하며 함께 고민하는 단일 HTML 장난감입니다. 사진·음원·장식이 파일에 포함되어 있어 인터넷 연결 없이 실행할 수 있습니다.

## 실행

[웹에서 바로 실행](https://hoodinga0v0-web.github.io/Hmmcat/)

[`hmm-cat.html`](hmm-cat.html)을 다운로드한 뒤 브라우저에서 엽니다. 별도 설치나 빌드 과정은 없습니다.

- 짧게 누르면 손이 올라오며 `hmm` 소리가 납니다.
- 길게 누르면 긴 `흐으음` 반응이 나옵니다.
- 드물게 Aha와 ‘터치 더 줘’ 고양이가 등장합니다.
- 일반 대사는 다음 터치로 넘길 수 있습니다. 특별 이벤트는 끝까지 재생됩니다.
- 언어 선택, 음소거, 옷장, 통계, 초기화 버튼을 제공합니다.

횟수·해금·통계는 현재 브라우저에 저장됩니다. 파일을 다른 경로나 브라우저로 옮기면 기존 기록이 함께 이동하지 않을 수 있습니다.

## 진행 구성

1,000,000회까지 주요 이벤트 24개와 중간 연구 등급 이벤트 185개를 배치했습니다. 액세서리는 19종이며 해금 전 정보는 게임 화면에서 숨깁니다. 백만 회 엔딩 뒤에는 귀와 네 방향 고양이 소환이 유지됩니다.

전체 일정과 구현 세부 내용은 [이벤트·액세서리 계획 및 완료 기록](event-accessory-plan.md)에 있습니다. 이 문서에는 해금 내용과 엔딩이 공개되어 있습니다.

Aha 손 그림만 좌우 반전했습니다. 전구의 위치와 모션, 일반 고민 손은 기존 동작을 유지합니다.

## GitHub Pages 배포

게임 소스는 `hmm-cat.html` 한 파일로 관리합니다. `main`에 게임 또는 배포 구성을 수정해 push하면 [Pages 워크플로](.github/workflows/pages.yml)가 사이트를 자동 배포합니다. Actions에서 수동 실행도 가능합니다.

빌드 스크립트가 게임의 JavaScript 구문을 확인한 다음 `_site/index.html`과 다운로드용 `_site/hmm-cat.html`을 생성합니다. 배포에는 이 폴더만 사용하며 별도의 npm 패키지는 필요하지 않습니다.

```sh
node scripts/build-pages.mjs
```

다른 저장소에 복사해 사용할 때는 Settings → Pages → Source를 **GitHub Actions**로 지정합니다. 구성은 [GitHub Pages 공식 워크플로 안내](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)를 따릅니다.

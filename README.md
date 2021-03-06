[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=6620653&assignment_repo_type=AssignmentRepo)

![Gif](https://media.giphy.com/media/81OfslMd6iWN38H2Gh/giphy.gif)


# Marvel API Task List

- [x] Marvel çizgi romanlarının listesine erişim sağlayabilecek ve ilgili çizgi romanda yer alan kahramanların listesini görebilecek.
      (GET /v1/public/comics)
      (GET /v1/public/characters)
- [x] Uygulama içerisinde kullanıcı kahraman adına göre arama yapabilecek,
      (GET /v1/public/comics/{comicId}/characters),
      (GET /v1/public/characters/{characterId}/comics)

- [x] Kullanıcı eğer isterse sevdiği çizgi romanı ya da kahramanı favorilerine alabilecek. (GET /v1/public/characters)

- [x] Favoriye aldığı öğeyi uygulamaya geri girdiğinde de görebilecek. (Not: AsyncStorage Paketi kullanılacaktır.)

- [] Uygulama içinde gece gündüz modu ve dil desteği de isteniyor. Bunun için bir Ayarlar sayfası eklenebilir.

- [ ] [] Gece gündüz modunun default değerini telefonun ayarlarından tespit edilip belirlenmesi önemli bir istek.

* Marvel API: https://developer.marvel.com/
* AsyncStorage: https://react-native-async-storage.github.io/async-storage/docs/install/

* ## Dil desteği için opsiyonel
* React i18next: https://react.i18next.com/

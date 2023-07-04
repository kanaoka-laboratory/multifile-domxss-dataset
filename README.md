# Multifile DOMXSS Dataset

複数ファイルにまたがり発生するDOM Based XSS脆弱性のサンプルデータセット

## Description

本データセットは[Firing Range](https://github.com/google/firing-range)に含まれるDOM Based XSSを基にして作成された。

19種類のSourceと34種類のSinkを組み合わせて発生するDOM Based XSS脆弱性69組をFiring Rangeから抽出し、脆弱性に関係するSourceとSinkをそれぞれ別のファイルに分けてデータを作成。 
ファイルの分割手法5種類と組み合わせて342組[^1]のデータから構成されるデータセットを作成した。

19種類のSourceと34種類のSinkを組み合わせて発生するDOM Based XSS脆弱性69組をFiring Rangeから抽出し、脆弱性に含まれるSourceとSinkを別のファイルに分けた。
ファイルの分け方を5種類と組み合わせて342組[^1]のデータから構成されるデータセットを作成した。

[^1]: 脆弱性の組み合わせのうち、Sourceがdocument.referrerである3個は構文上できない分割方法があるため、本データセットでは除く。


## Source List

Firing Range内に存在するDOM Based XSS脆弱性19種類のSourceを抽出し、それぞれに番号を割り当てた。

| No. | Source |
|:---|:---|
| 01　|　document.baseURI |
| 02　|　document.cookie |
| 03　|　document.documentURI |
| 04　|　document.referrer |
| 05　|　document.URL |
| 06　|　document.URLUnencoded |
| 07　|　localStorage['badValue'] |
| 08　|　localstorage.getItem('badValue') |
| 09　|　localStorage.badValue |
| 10　|　location |
| 11　|　location.hash |
| 12　|　location.href |
| 13　|　locaiton.pathname |
| 14　|　location.search |
| 15　|　postMessageEvent.data |
| 16　|　sessionStorage['badValue'] |
| 17　|　sessionStorage.getItem('badValue') |
| 18　|　sessionStorage.badValue |
| 19　|　window.name |

## Sink List

Firing Range内に存在するDOM Based XSS脆弱性34種類のSinkを抽出し、それぞれに番号を割り当てた。

| No. | Sink |
|:---|:---|
| 01 | a.href |
| 02 | area.href |
| 03 | assign |
| 04 | a.xlink-href |
| 05 | base.href |
| 06 | button.formAction |
| 07 | document.location |
| 08 | document.location.assign |
| 09 | document.write |
| 10 | document.writeln |
| 11 | embedElement.src |
| 12 | eval |
| 13 | fech-resource |
| 14 | from.action |
| 15 | function |
| 16 | iframe.src |
| 17 | inlineevent |
| 18 | innerHTML |
| 19 | input.formAction |
| 20 | javascript-url |
| 21 | link.href |
| 22 | object.data |
| 23 | onclik-addEventListener |
| 24 | onclik-setAttribute |
| 25 | parmCodeEvent.value |
| 26 | paramMovieElement.value |
| 27 | paramUrlElement.value |
| 28 | range.createContextualFragment |
| 29 | replace |
| 30 | script.href |
| 31 | script.src |
| 32 | setTimeout |
| 33 | window.open |
| 34 | xhttp.open |

## File Splitting Methods List

Firing RangeのDOM Based XSS脆弱性が含まれている単一ファイルに対して、import文とexport文を用いることで、複数ファイルにまたがり発生する脆弱性データを作成した。ファイルの分割手法にそれぞれ番号を割り当てた。

No.1から4では、Sourceの含まれるjsファイル内で値をエクスポートし、Sinkの含まれるjsファイル内でインポートしている。
No.5ではSourceとSinkの2つのjsファイル内で値をエクスポートし、仲介ファイルであるmain.js内でインポートしている。


| No. | ファイルの分割方法 |
|:---|:---|
| 01 | 変数をエクスポート (最後にexport) |
| 02 | 変数をエクスポート (宣言前にexport)|
| 03 | 関数をエクスポート (最後にexport) |
| 04 | 関数をエクスポート (宣言前にexport)|
| 05 | 仲介ファイル (main.js) で2つをimport  |

**最後にexport**では下記の通り値を宣言したあとでexport文を用いる
```js
var payload = location.hash;
export { payload };
```

**宣言前にexport**では下記の通り値を宣言する直前でexport文用いる
```js
export var payload = location.hash;
```

## Directory Structures

342組のデータは、それぞれSourceを含むファイルやSinkを含むファイルなど複数のファイルから構成されるために、ディレクトリとして提供される。ディレクトリの構造は以下の通りである。

```
splitTypeNumber
└── sourceNumber-sinkNumber
    ├── index.html
    ├── source.js
    ├── sink.js
    └── (main.js)
```

各ファイルの説明
- `index.html`: DOM Based XSS脆弱性の含まれたソースコードを呼び出すhtmlファイル
- `source.js`: 抽出した脆弱性のソースコードで、Sourceの役割を持つjsファイル
- `sink.js`: 抽出した脆弱性のソースコードで、Sinkの役割を持つjsファイル
- `main.js`: *splitTypeNumber*が*05*の場合のみ含まれる仲介用のjsファイル

## Publication

日浦 秀侑、金岡 晃：DOM Based XSS脆弱性検出手法の評価用データセットの提案、マルチメディア，分散，協調とモバイル(DICOMO2023)シンポジウム

## Contact

日浦 秀侑 (東邦大学) 6522014h@st.toho-u.jp

## License

This dataset includes the work that is distributed in the [Apache License 2.0](./LICENSE).

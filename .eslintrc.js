module.exports = {
    // グローバルな変数を環境に応じて定義してくれるもの
    // rulesで"no-undef": "error"にした場合
    "env": {
        // document.body.~~のdocumentでエラーになる
        "browser": true,
        "es2021": true, 
        // 一行目のmoduleはNodeの構文なので、trueにしないとエラーになる
        "node": true,
    },

    // eslint自体を拡張する。recommendedのみを追加。allもあるけど厳しすぎる
    "extends": [
        // おすすめ
        "eslint:recommended",
        "plugin:react/recommended",
        // Hooksのチェックをしてくれる
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        // 最後にprettierを入れるとESLint Config Prettierが有効になる
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    // JS5までしか対応していないので、JSが解析に必要なものを補足で追加するところ
    "parserOptions": {
        // "extends": "plugin:react/recommended"でpackage.jsonの"eslint-plugin-react": "^7.30.1"が有効化されているので、無くてもOK
        "ecmaFeatures": {
            "jsx": true
        },
        // ややこしいので書き換え→だけどenvで書いているので不要
        // "ecmaVersion": 12,
        // "ecmaVersion": 2021,

        // これがないとimort 〜もエラーになっちゃう
        "sourceType": "module"
    },
    // 機能（rules）を拡張する
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        // 最後にセミコロンが必要か。"error", "warn", "off"がある
        // prettierを入れたらここはオフでOK
        // "semi": ["error", "always"],
        // ""か''か
        // "quotes": ["error", "double"],
        // コンポーネントの引数Propsに型を付けて下さいね
        "react/prop-types": ["off"],
    },
    "settings": {
        "react": {
            // package.jsonを見てReactのバージョンを決めてくれる
            "version": "detect"
        }
    }
};

# API-Solo-Project
このリポジトリはCode Chrysalisの生徒であるときに作成しました（This was created during my time as a student at Code Chrysalis）

# swaggerのバージョン定義
swagger: "2.0"
# APIについての情報
info:
  # API名
  title: "遊園地会員情報API"
  # APIのバージョン
  version: "1.0.0"
  # APIの説明
  description: "userRankテーブルのレコードを登録・更新・取得・削除するAPI"
# APIのホスト名 
host: "localhost:3000"
# API共通のpathを記載する
basePath: "/user"
# 対象のテーブル名
tags:
- name: "userRank"
- description: "userRankテーブル"
schemes:
# スキーマ
- "http"
# APIのエントリポイントを記述
paths:
  # URIを記載する
  /products:
  # GETリクエスト
    get:
      # 前述したタグ名
      tags: 
      - "userRank"
      #概要
      summary: "遊園地会員情報取得"
      #詳細説明
      description: "userRankテーブルに登録されている遊園地会員情報を全件取得する"
      # content-typeの指定
      produces: 
      - "application/json"
      # レスポンスに関する記述
      responses:
        #statusCode200の時
        200:
          description: "成功"
          # レスポンスのbodyについて記述する
          schema:
            # jsonの場合,だけobjectを指定する
            type: "object"
            # bodyの中身(ダミー値でいい)
            properties:
              id: 
                #データ型
                type: "integer"
                #ダミー値
                example: "1"
              firstName:
                type: "string"
                example: "hogehoge"
              lastName:
                type: "string"
                example: "hogehoge"
              age:
                type: "integer"
                example: "12"
              rank:
                type: "integer"
                example: "1"          
  # POSTリクエスト
    post:
      tags: 
      - "userRank"
      summary: "遊園地会員情報登録"
      description: "遊園地会員情報をuserRankテーブルに1件登録する"
      produces: 
      - "application/json"
      # リクエストのbodyについて記述する
      parameters:
      # パラメータの名前
      - name: "body"
        # パラメータの場所
        in: "body"
        required: true
        schema:
          type: "object"
          properties:
              firstName:
                type: "string"
                example: "piyopiyo"
              lastName:
                type: "string"
                example: "piyopiyo"
              age:
                type: "integer"
                example: "12"
              rank:
                type: "integer"
                example: "1"
      responses:
        200:
          description: "成功"
          schema:
            type: "object"
            properties:
              id: 
                type: "integer"
                example: "2"
              firstName:
                type: "string"
                example: "piyopiyo"
              lastName:
                type: "string"
                example: "piyopiyo"
              age:
                type: "integer"
                example: "12"
              rank:
                type: "integer"
                example: "1"
        400:
          description: "失敗"
          schema:
            type: "object"
            properties:
              message:
                type: "string"
                example: "Bad Request"
  # PUTリクエスト
    put:
      tags:
      - "userRank"
      summary: "遊園地会員情報更新"
      description: "URIで指定したidのuserRankテーブルの遊園地会員情報を更新する"
      path:
      - "/{id}:"
      produces:
      - "application/json"
      parameters:
      - name: "id"
        in: "path"
        description: "更新対象のid"
        required: true
        # データ型
        type: "integer"
      - name: "body"
        in: "body"
        description: "更新内容"
        required: true
        schema:
          type: "object"
          properties:
            firstName:
              type: "string"
              example: "fugafuga"
            lastName:
              type: "string"
              example: "fugafuga"
            age:
              type: "integer"
              example: "12"
            rank:
              type: "integer"
              example: "1"
      responses:
        200:
          description: "成功"
          schema:
            type: "object"
            properties:
              id: 
                type: "integer"
                example: "2"
              firstName:
                type: "string"
                example: "fugafuga"
              lastName:
                type: "string"
                example: "fugafuga"
              age:
                type: "integer"
                example: "12"
              rank:
                type: "integer"
                example: "1"
        400:
          description: "失敗"
          schema:
            type: "object"
            properties:
              message:
                type: "string"
                example: "Bad Request"
  # DELETEリクエスト
    delete:
      tags:
      - "userRank"
      summary: "遊園地会員情報削除"
      description: "URIで指定したidのuserRankテーブルの遊園地会員情報を削除する"
      path:
      - "/{id}:"
      produces: 
      - "apllication/json"
      parameters:
      - name: "id"
        in: "path"
        description: "削除対象の会員id"
        required: true
        type: "integer"
      responses:
        200:
          description: "削除の戻り値"
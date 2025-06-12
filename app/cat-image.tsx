"use client"; // コンポーネントの引数を定義する
import { useState } from "react";
import { fetchImage } from "./fetch-image";
type CatImageProps = {
  url: string;
};
 
// 画像を表示するコンポーネント
export function CatImage({ url }: CatImageProps) {
  const [imageUrl, setImageUrl] = useState(url);
  const refreshImage = async () => {
    setImageUrl(""); // 初期化
    const image = await fetchImage();
    setImageUrl(image.url);
  };

  return (
    
    <div>
      <button
      onClick={refreshImage}
      style={{
        padding: '10px 20px',
        border: '2px solid #8BC34A', // 黄緑色枠線
        borderRadius: '5px', // 角を丸くする
        backgroundColor: '#8BC34A', // 背景色を黄緑色に
        color: 'white', // テキスト色を白に
        cursor: 'pointer', // カーソルをポインターに
        fontSize: '16px', // フォントサイズ
        fontWeight: 'bold', // フォントを太く
        marginTop: '20px', // 上部に余白
      }}
    >他のにゃんこも見る</button>
      {imageUrl && <img src={imageUrl} />}
    </div>
  );
}
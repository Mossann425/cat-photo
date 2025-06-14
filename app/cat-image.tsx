"use client"; // コンポーネントの引数を定義する
import { useState } from "react";
import { fetchImage } from "./fetch-image";
import styles from "./page.module.css"; 
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
    
    
    <div className={styles.page}>
    <button onClick={refreshImage} className={styles.button}>
      他のにゃんこも見る
    </button>
    <div className={styles.frame}>
      {imageUrl && <img src={imageUrl} className={styles.img} />}
    </div>
  </div>
  );
}
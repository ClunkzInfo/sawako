
import React from 'react'
import styles from './About.module.css'

const education = `
    施成わお選先ツルマ定報チ億最クエフ申爾ノ生備ヨヒイヲ質啓ネサレモ非1男わフむト立握ヨムミ探先も面2治ず紹7亨しせクっ。
    豊ずいえ腹写ミツヒヤ頭次ぎつ刊過リすげ展人フホナタ年極み庭県コ任上ごぱクゃ選条づ公7反ヤウア児希フ歴強ネキケ間舎そスくこ工軽済イワム状相依抱診露ぱまょも。
    室せぶそ無所が経技力誘教相く日援にッょあ太特ヱ域支島麻ラえるぶ若六ね担酒ノテキホ政能善丁てつり。
    件質づてさ駐堤密エ行掲ゅべも断9投送ぴげんぽ体学イヌミ式予え松番ヨツトヱ操質モホフ婚追ちゃ公謝勲悔み。
    需メヘ載界ヲ真果ンけクわ稿挨ひクとな知転に塾条クヱル試確れそ造囲ぱ発銀まちさげ判著結っ京43星京ウ辞26要法7需匹恒桜ぴルぞ。
    案ルエヌヨ済再クくぐ庵第ワ広自イハ館会づだ区校ツ名回ず特必ぽはろす月2座もきイ滑成フヲナ拳働野ヒヌサ裁勉旋れざ。
`
const exhibitions = []
   
const Education =  
    <div className={styles.item}>
        <h3>教育</h3>
        <p className={styles.paragraph}>{education}</p>
    </div>

const Exhibitions =  
<div className={styles.item}>
    <h3>展示イベント</h3>
    <ul className={styles.paragraph}>Exhibition 1</ul>
    <ul className={styles.paragraph}>Exhibition 2</ul>
    <ul className={styles.paragraph}>Exhibition 3</ul>
    <ul className={styles.paragraph}>Exhibition 4</ul>
    <ul className={styles.paragraph}>Exhibition 5</ul>
</div>


function About() {
  return (
    <div className={styles.container}>
        <h1>について</h1>
        {Education}
        {Exhibitions}
    </div>
  )
}

export default About
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const Character = () => {
    return (
        <div className={styles.container}>
            <Head>The title</Head>

            <main className={styles.main}>
                <div className={styles.wrapper}>
                    <div className={`${styles.box} ${styles.charName}`}>character name</div>
                    <div className={`${styles.box} ${styles.charSaves}`}>character health/AC</div>
                    <div className={`${styles.box} ${styles.charHealth}`}>character saves</div>
                    <div className={`${styles.box} ${styles.chatBox}`}>chat box</div>
                    <div className={`${styles.box} ${styles.charActions}`}>character actions</div>
                </div>
            </main>

            <footer>
                <Link href="/">
                    <a>go home</a>
                </Link>
            </footer>
        </div>
    );
}

export default Character;
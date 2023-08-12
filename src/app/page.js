import Image from 'next/image'
import styles from './page.module.css'
import Navegator from './componentes/Navegator'
export default function Home() {
  return (
    <main className={styles.main}>
     <Navegator/>
    
    </main>
  )
}

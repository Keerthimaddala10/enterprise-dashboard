import { Outlet } from "react-router-dom"
import styles from "./MainLayout.module.css"

function MainLayout() {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <h3>Sidebar</h3>
        <p>Dashboard</p>
      </aside>

      <div className={styles.content}>
        <header className={styles.header}>
          <h2>Enterprise Dashboard</h2>
        </header>

        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default MainLayout
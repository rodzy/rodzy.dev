import styles from "./layout.module.css";
import Link from "next/link";

export default function TheHeader() {
  return (
    <div className={styles.theheaderWrapper}>
      <div className={styles.theheaderInsider}>
        <div className={styles.theheaderInsiderInsider}>
          <div className={styles.theheadercontentdiv}>
            <div
              style={{
                overflow: "auto",
              }}
            >
              <Link href="/blog">
                <a>Blog</a>
              </Link>
              <Link href="/projects">
                <a
                  style={{
                    paddingLeft: 10,
                  }}
                >
                  Projects
                </a>
              </Link>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

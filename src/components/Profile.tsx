import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/52634394?s=460&u=dca2b49b355d28a81e02c2fbdf819c66628c9e51&v=4" alt="avatar Arthur Svensson" />
            <div>
                <strong>Arthur Svensson</strong>
                <p>
                  <img src="icons/level.svg"   alt="Level" />
                  Level 1
                </p>
            </div>
        </div>
    )
}
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    const { currentExperience, experienceToNextLvel } = useContext(ChallengesContext);

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLvel;

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />
            
                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
                  {currentExperience} xp
                </span>
            </div>
            <span>{experienceToNextLvel} xp</span>
        </header>
    );
}
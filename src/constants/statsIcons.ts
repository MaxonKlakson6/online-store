import hp from 'static/icons/heart.png';
import attack from 'static/icons/swords.png';
import defense from 'static/icons/shield.png';
import speed from 'static/icons/running.png';
import specialAttack from 'static/icons/staff.png';
import specialDefense from 'static/icons/award.png';

interface StatsIcons {
    [key: string]: string;
}

export const statsIcons: StatsIcons = {
    hp,
    attack,
    defense,
    speed,
    specialAttack,
    specialDefense,
};

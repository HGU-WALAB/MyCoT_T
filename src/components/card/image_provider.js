
import BaekJoonLogo from 'src/assets/images/baekjoon_logo.png';
export const imageProvider = (platformName) => {
    switch(platformName.toLowerCase()){
        case 'baekjoon':
        case 'leetcode':
        case 'programmers':
            return BaekJoonLogo;
        default:
            return BaekJoonLogo;
    }
}
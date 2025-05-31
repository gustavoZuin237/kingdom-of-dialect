import * as s from './styles'

interface CharacterImagePropsI {
    level: number
}

export function CharacterImage({level} : CharacterImagePropsI) {
    let imageSrc = ''

    switch (level) {
        case 0:
            imageSrc = `${import.meta.env.BASE_URL}assets/characters/ferret.png`
            break;

        case 1:
            imageSrc = `${import.meta.env.BASE_URL}assets/characters/aunt_ferret.png`
            break;

        case 2:
            imageSrc = `${import.meta.env.BASE_URL}assets/characters/fox.png`
            break;

        case 3:
            imageSrc = `${import.meta.env.BASE_URL}assets/characters/frog.png`
            break;

        case 4:
            imageSrc = `${import.meta.env.BASE_URL}assets/characters/duck.png`
            break;

        case 5:
            imageSrc = `${import.meta.env.BASE_URL}assets/characters/aunt_ferret.png`
            break;

        case 6:
            imageSrc = `${import.meta.env.BASE_URL}assets/characters/bones.png`
            break;

    
        default:
            break;
    }

    return (
        <s.CharacterContainer>
            <s.Image src={imageSrc} />
        </s.CharacterContainer>
    )
}
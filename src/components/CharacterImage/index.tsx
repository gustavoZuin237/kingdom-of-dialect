import * as s from './styles'

interface CharacterImagePropsI {
    level: number
}

export function CharacterImage({level} : CharacterImagePropsI) {
    let imageSrc = ''

    switch (level) {
        case 0:
            imageSrc = '/assets/characters/ferret.png'
            break;

        case 1:
            imageSrc = '/assets/characters/aunt_ferret.png'
            break;

        case 2:
            imageSrc = '/assets/characters/fox.png'
            break;

        case 3:
            imageSrc = '/assets/characters/frog.png'
            break;

        case 4:
            imageSrc = '/assets/characters/duck.png'
            break;

        case 5:
            imageSrc = '/assets/characters/aunt_ferret.png'
            break;

        case 6:
            imageSrc = '/assets/characters/bones.png'
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
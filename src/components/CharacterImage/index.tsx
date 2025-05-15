import * as s from './styles'

interface CharacterImagePropsI {
    level: number
}

export function CharacterImage({level} : CharacterImagePropsI) {
    let imageSrc = ''

    switch (level) {
        case 1:
            imageSrc = 'src/images/characters/aunt_ferret.png'
            break;

        case 2:
            imageSrc = 'src/images/characters/aunt_ferret.png'
            break;

        case 3:
            imageSrc = 'src/images/characters/aunt_ferret.png'
            break;

        case 4:
            imageSrc = 'src/images/characters/aunt_ferret.png'
            break;

        case 5:
            imageSrc = 'src/images/characters/aunt_ferret.png'
            break;

        case 6:
            imageSrc = 'src/images/characters/aunt_ferret.png'
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
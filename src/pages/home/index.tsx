import { Button } from '../../components/Button'
import * as s from './styles'

export function Home() {
    return (
        <s.PageContainer>
            <Button variant='white' link='/register' clickFunction={() => {}}>START</Button>
        </s.PageContainer>
    )
}
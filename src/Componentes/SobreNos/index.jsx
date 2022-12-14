import './SobreNos.css'
import foto2 from './img-2__sobre-nos.jpg'

export default function SobreNos() {

    return(
        <div className="sobre-nos" id='sobre-nos'>
            <div className='sobre-nos__desktop'>
                <div className='sobre-nos__info'>
                    <div className="sobre-nos__imagem">
                        <img className='img2' src={foto2}></img>
                    </div>
                    <div className="sobre-nos__texto">
                        <h3 className="sobre-nos__subtitulo">Sobre nós</h3>
                        <h1 className="sobre-nos__titulo">Advogados especializados</h1>
                        <p className="sobre-nos__descricao">
                            Fundado em 2017, Escritório Advogados atua em várias áreas do direito e oferece assistência a grandes corporações dos mais variados setores, instituições financeiras e entidades governamentais.
                        </p>
                        <p className='sobre-nos__descricao'>
                            A Escritório Advogados é formada por advogados com especialização, pós graduação e mestrado nas mais importantes universidades públicas e privadas do Brasil, passando por constantes atualizações em seus currículos para um melhor atendimento ao público alvo de nosso escritório.
                        </p>
                    </div>
                </div>
                <a href='#fale-conosco' className='sobre-nos__link'>Fale conosco</a>
            </div>
            <div className='sobre-nos__mobile'>
                <h4 className='sobre-nos__mobile-subtitulo'>Sobre nós</h4>
                <h1 className='sobre-nos__mobile-titulo'>Advogados especializados</h1>
                <p className='sobre-nos__mobile-descricao'>
                    Fundado em 2017, Escritório Advogados atua em várias áreas do direito e oferece assistência a grandes corporações dos mais variados setores, instituições financeiras e entidades governamentais.
                </p>
                <p className='sobre-nos__mobile-descricao'>
                    A Escritório Advogados é formada por advogados com especialização, pós graduação e mestrado nas mais importantes universidades públicas e privadas do Brasil, passando por constantes atualizações em seus currículos para um melhor atendimento ao público alvo de nosso escritório.
                </p>
                <a href='#fale-conosco' className='baixo__input sobre-nos__mobile-input'>FALE CONOSCO</a>
            </div>
        </div>
    )

}
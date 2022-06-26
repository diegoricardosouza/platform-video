import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

type LessonProps = {
    title: string
    slug: string
    availableAt: Date
    type: 'live' | 'class'
}

const Lesson = ({ title, slug, availableAt, type }: LessonProps) => {
    const isLessonAvailable = isPast(availableAt)
    const availableDateFormatted = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBR
    })

    return (
        <article>
            <a href="#">
                <span className="text-gray-300">
                    {availableDateFormatted}
                </span>

                <div className="rounded border border-gray-500 p-4 mt-2">
                    <header className="flex items-center justify-between">
                        {isLessonAvailable ? (
                            <h2 className="text-sm text-blue-500 font-medium flex items-center gap-2">
                                <CheckCircle size={20} />
                                Conteúdo liberado
                            </h2>
                        ) : (
                            <h2 className="text-sm text-orange-500 font-medium flex items-center gap-2">
                                <Lock size={20} />
                                Em breve
                            </h2>
                        )}
                        

                        <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
                            { type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA' }
                        </span>
                    </header>

                    <strong className="text-gray-200 mt-5 block">
                        {title}
                    </strong>
                </div>
            </a>
        </article>
    )
}

export default Lesson
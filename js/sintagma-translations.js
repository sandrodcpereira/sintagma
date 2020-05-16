$('#selectLanguageDropdown').localizationTool({
                'defaultLanguage' : 'pt_PT',
                'showFlag': true,
                'showCountry': false,
                'showLanguage': true,
                'languages' : {
                    'portuguese' : {
                        'country': 'Portugal',
                        'language' : 'Português',
                        'flag' : {
                            'url' : 'img/flag/PT.png', /* url of flag image */
                        }
                    },
                    'english' : {
                        'country': 'United Kingdom',
                        'language' : 'English',
                        'flag' : {
                            'url' : 'img/flag/EN.png', /* url of flag image */
                        }
                    },
                    'spanish' : {
                        'country': 'Spain',
                        'language' : 'Spanish',
                        'countryTranslated': 'España',
                        'languageTranslated': "Español",
                        'flag': {
                            'url' : 'img/flag/ES.png'
                        }
                    },
                    'french' : {
                        'country': 'France',
                        'language' : 'French',
                        'countryTranslated': 'France',
                        'languageTranslated': "Français",
                        'flag': {
                            'url' : 'img/flag/FR.png'
                        }
                    }
                },
                /*
                 * Translate your strings below
                 */
                'strings' : {
                    'class:translate-current-lang' : {
                        'portuguese' : 'PT',
                        'english' : 'EN',
                        'spanish' : 'ES',
                        'french' : 'FR',
                    },
                    'class:translate-title' : {
                        'portuguese' : 'Sintagma - A sintagma traduz, o conceito mantém-se desde 1993',
                        'english' : 'Sintagma - sintagma translates, the concept stays the same since 1993',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Sintagma - sintagma traduit, le concept reste depuis 1993',
                    },
                    'class:translate-header' : {
                        'portuguese' : 'A sintagma traduz, o conceito mantém-se desde 1993',
                        'english' : 'sintagma translates, the concept stays the same since 1993',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'sintagma traduit, le concept reste depuis 1993',
                    },
                    'class:translate-home' : {
                        'portuguese' : 'Início',
                        'english' : 'Home',
                        'spanish' : 'Lorem',
                        'french' : 'Accueil',
                    },
                    'class:translate-services' : {
                        'portuguese' : 'Serviços',
                        'english' : 'Services',
                        'spanish' : 'Ipsum',
                        'french' : 'Services',
                    },
                    'class:translate-contact' : {
                        'portuguese' : 'Contactos',
                        'english' : 'Contacts',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Contacts',
                    },
                    'class:translate-about' : {
                        'portuguese' : 'Sobre',
                        'english' : 'About',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },

                    'class:translate-cta' : {
                        'portuguese' : 'Contacte-nos',
                        'english' : 'Contact us',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Contactez-nous',
                    },

                    'class:translate-video' : {
                        'portuguese' : '???',
                        'english' : '???',
                        'spanish' : '[spanish]',
                        'french' : '[video ici]',
                    },


                    // services start below


                    'class:translate-translation-title' : {
                        'portuguese' : 'Tradução Técnica',
                        'english' : 'Lorem ipsum',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },
                    'class:translate-translation-content' : {
                        'portuguese' : 'Os serviços de tradução são efectuados por profissionais especializados na área pretendida e os textos são sujeitos a uma minuciosa revisão.',
                        'english' : 'Lorem ipsum',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },

                    'class:translate-subtitle-title' : {
                        'portuguese' : 'Tradução Audiovisual (TAV)',
                        'english' : 'Lorem ipsum',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },

                    'class:translate-subtitle-content' : {
                        'portuguese' : 'O serviço de tradução audiovisual para Legendagem e Dobragem para Televisão e Cinema, em vários pares linguísticos, dispõe de uma equipa de profissionais com formação especializada e software profissional.',
                        'english' : 'Lorem ipsum',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },

                    'class:translate-subtitle-content2' : {
                        'portuguese' : 'Além dos formatos de tradução convencionais, fornecemos também serviços de acessibilidade, Legendagem para surdos, para público surdo ou com deficiência auditiva, e Audiodescrição, vocacionada para o público com deficiência visual.',
                        'english' : 'Lorem ipsum',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },

                    'class:translate-interpretation-title' : {
                        'portuguese' : 'Interpretação',
                        'english' : 'Lorem ipsum',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },

                    'class:translate-interpretation-content' : {
                        'portuguese' : 'Organizamos equipas de interpretação simultânea para <b>reuniões</b>, <b>congressos</b> e <b>convenções</b> em várias línguas, dispondo de profissionais com formação específica na área.',
                        'english' : 'Lorem ipsum',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },

                    /* 'class:translate-multimedia-title' : {
                        'portuguese' : 'Som e imagem',
                        'english' : 'Sound and image',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },
                    'class:translate-multimedia-content' : {
                        'portuguese' : 'Dispomos de uma equipa de profissionais da área do <b>vídeo</b>, <b>fotografia</b>, <b>áudio</b>, <b><i>design</i></b> e <b>programação</b>, que surge de uma necessidade de produção de conteúdos próprios, de modo a dar corpo às ideias dos nossos clientes, pelas nossas mãos.',
                        'english' : 'We have a team of <b>video</b>, <b>audio</b>, <b>design</b> and <b>programming</b> professionals created due to the rising need to satisfy our clients\' need to have their ideas take shape through our own means.',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    }, */

                    'class:translate-training-title' : {
                        'portuguese' : 'Formação',
                        'english' : 'Lorem ipsum',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Formation',
                    },
                    'class:translate-training-content' : {
                        'portuguese' : 'A sintagma organiza regularmente <b>cursos de formação certificados</b> de legendagem nas suas instalações em Oeiras, onde dispõe de equipamento adequado e individualizado.',
                        'english' : 'sintagma regularly organizes <b>certified courses</b> in subtitling on its premises in Oeiras, where it has individual workstations and software to practice.',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },
                    'class:translate-training-content2' : {
                        'portuguese' : 'Proporcionamos estágios mediante protocolos com várias Universidades, entre elas a Faculdade de Letras de Lisboa, a Faculdade de Ciências Sociais e Humanas, da Universidade Nova de Lisboa, e a Universidade do Minho.',
                        'english' : 'Lorem ipsum',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },

                    //new, dubbing

                    /* 'class:translate-dubbing-title' : {
                        'portuguese' : 'Locução e Pós-Produção Áudio',
                        'english' : 'Lorem ipsum',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },
                    'class:translate-dubbing-content' : {
                        'portuguese' : 'A sintagma tem estúdio próprio e uma equipa pronta a executar projetos de locução, dobragem, sonorização e mistura de som, dispondo de todos os meios necessários, técnicos e humanos. Este conjunto de profissionais da área do <b>vídeo</b>, <b>fotografia</b>, <b>áudio</b>, <b><i>design</i></b> e <b>programação</b> tem experiência e criatividade para dar vida às ideias dos nossos clientes.',
                        'english' : 'Lorem ipsum',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    }, */

                    // new, dubbing ends

                    //new, audiodescription

                    'class:translate-audiodescription-title' : {
                        'portuguese' : 'Audiodescrição',
                        'english' : 'Lorem ipsum',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },
                    'class:translate-audiodescription-content' : {
                        'portuguese' : 'A Sintagma presta serviços de acessibilidade e consultoria nas artes visuais e audiovisuais para o público com deficiência visual e intelectual. Elaboramos guiões de audiodescrição para televisão, cinema teatro e museus com profissionais qualificados. Também podemos proceder à gravação da narração dos guiões de AD no nosso estúdio, no formato desejado.',
                        'english' : 'Lorem ipsum.',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },

                    // new, audiodescription ends

                    //new, accessibility

                    /* 'class:translate-accessibility-title' : {
                        'portuguese' : 'Acessibilidade',
                        'english' : 'Lorem ipsum',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },
                    'class:translate-accessibility-content' : {
                        'portuguese' : 'Lorem ipsum.',
                        'english' : 'Lorem ipsum.',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    }, */

                    // new, accessibility ends

                    // new, about

                    'class:translate-about-title' : {
                        'portuguese' : 'Sobre a sintagma',
                        'english' : 'About sintagma',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Sous-titrage',
                    },
                    'class:translate-about-content' : {
                        'portuguese' : 'A nossa filosofia mantém-se a mesma: oferecer o melhor serviço e qualidade, de forma a garantir conteúdo audiovisual de excelência ao espectador. Quer sejam filmes ou séries, a nossa tradução e legendagem respeita a voz e ritmo do original.',
                        'english' : 'Sintagma’s philosophy remains the same: to offer the best service and quality to our clients, while ensuring excellence in audiovisual content. Whether we’re working on movies or TV series, our translation and subtitling respects the voice and rhythm of the original.',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },

                    'class:translate-about-content-2' : {
                        'portuguese' : 'Sabemos a importância de acompanhar os estudos mais recentes no campo da TAV e, após duas décadas fiéis a este princípio, continuamos a aperfeiçoar a nossa atividade enquanto especialistas em legendagem, localização, dobragem, audiodescrição e serviços de inserção de legendas.',
                        'english' : 'We understand the importance of working with the most recent studies in the field of Audiovisual Translation in mind and, after adhering to this principle for over two decades, we continue striving to perfect our craft, be it subtitling, language localisation, dubbing, audio description or subtitle embedding services.',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },



                    // new, about ends

                    


                    'class:translate-testemonials' : {
                        'portuguese' : 'Testemunhos',
                        'english' : 'Testemonials',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Témoignages',
                    },

                    'class:translate-clients' : {
                        'portuguese' : 'Clientes',
                        'english' : 'Clients',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Clients',
                    },

                    'class:translate-team' : {
                        'portuguese' : 'Equipa',
                        'english' : 'Team',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Équipe',
                    },

                    'class:translate-address' : {
                        'portuguese' : 'Morada',
                        'english' : 'Address',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Adresse',
                    },

                    'class:translate-phone' : {
                        'portuguese' : 'Telefone',
                        'english' : 'Phone',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Téléphone',
                    },


                    'class:translate-socialnetwork' : {
                        'portuguese' : 'Redes sociais',
                        'english' : 'Social networks',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Réseaux sociaux',
                    },

                    'class:translate-testemonial1-body' : {
                        'portuguese' : 'A colaboração com a sintagma na leccionação de seminários de pós-graduação em Tradução Audiovisual inglês-português e alemão-português foi uma oportunidade muito produtiva que me permitiu ficar a conhecer a qualidade, o rigor, a exigência e o profissionalismo do trabalho desenvolvido na sintagma, bem como o empenho na formação dos seus colaboradores.',
                        'english' : 'Collaborating with sintagma in the teaching of graduate seminars in Audiovisual Translation (English-Portuguese and German-Portuguese) was a very productive opportunity that enabled me to get to know the quality, precision, exigency and professionalism of the work carried out by sintagma as well as the commitment to training its employees.',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },

                    'class:translate-testemonial1-who' : {
                        'portuguese' : 'Alexandra Assis Rosa - Professora TAV/FLUL',
                        'english' : 'Alexandra Assis Rosa - Professor TAV/FLUL',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },

                    'class:translate-testemonial2-body' : {
                        'portuguese' : 'O trabalho de tradução levado a cabo na sintagma é de louvar, não só pelo profissionalismo com que é desempenhado, mas também por ser o resultado de anos de experiência e de um profundo conhecimento dos desafios linguísticos e culturais que se erguem no processo de tradução.',
                        'english' : 'The translation work carried out in sintagma is to be commended, not only for the professionalism with which it is performed, but also because it is the result of years of experience and a deep understanding of the linguistic and cultural challenges in the translation process.',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },

                    'class:translate-testemonial2-who' : {
                        'portuguese' : 'Sara Ramos Pinto - Professora Universitária e Investigadora',
                        'english' : 'Sara Ramos Pinto - University Professor and Researcher / Experienced Researcher - European Project TIME',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },

                    'class:translate-testemonial3-body' : {
                        'portuguese' : 'Após um ano de formação com a Dr.ª Rosário Valadas Vieira, que me ensinou tudo o que sei, e ao fim de quase quatro anos de colaboração, posso dizer que a sintagma continua, até hoje, a ser a minha "casa". Recomendo a sintagma não só a clientes, como a futuros colaboradores. A empresa e a Dr.ª Rosário são um verdadeiro exemplo no mercado da tradução.',
                        'english' : 'After a year of training with Rosário Valadas Vieira, who taught me everything I know, and after almost four years of collaboration, I can say that sintagma continues to this day to be my \'home\'. I recommend sintagma not only to customers but also future employees. The company and Rosario are certainly a benchmark in the translation market.',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },

                    'class:translate-testemonial3-who' : {
                        'portuguese' : 'Ana Filipa Vieira - Tradutora',
                        'english' : 'Ana Filipa Vieira - Translator',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },

                    'class:translate-testemonial4-body' : {
                        'portuguese' : 'A sintagma, na pessoa da Dra. Rosário Valadas Vieira, transmitiu-me as ferramentas que me permitem trabalhar hoje como Legendadora.',
                        'english' : 'sintagma, in the person of Rosário Valadas Vieira, gave me the tools that allow me to work today as a Subtitler.',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },
                    'class:translate-testemonial4-body2' : {
                        'portuguese' : 'Para além dos seus vastos conhecimentos na área, tem uma grande apetência para ensinar e, graças à sua presença afável, gera uma empatia que facilita a aprendizagem e contribui para tornar as aulas em momentos não só úteis como muito agradáveis.',
                        'english' : 'In addition to her extensive knowledge in the area, she has a great zeal for teaching and thanks to her friendliness and affable approach, her empathic nature facilitates learning and helps to make lessons not only useful but also very pleasant.',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },

                    'class:translate-testemonial4-who' : {
                        'portuguese' : 'Paula Amaral - Tradutora',
                        'english' : 'Paula Amaral - Translator',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },

                    'class:translate-testemonial5-body' : {
                        'portuguese' : 'A Sintagma Traduções foi sempre uma empresa de referência na área da Tradução e Legendagem, pelo que recomendo vivamente os seus serviços.',
                        'english' : 'Sintagma Traduções has always been a benchmark in the field of translation and subtitling, so I highly recommend their services.',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },

                    'class:translate-testemonial5-who' : {
                        'portuguese' : 'Jorge Almeida e Pinho - Tradutor',
                        'english' : 'Jorge Almeida e Pinho - Translator',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },

                    'class:translate-role-ceo' : {
                        'portuguese' : 'Directora-Geral',
                        'english' : 'CEO',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },

                    'class:translate-role-projman' : {
                        'portuguese' : 'Gestor de Projectos',
                        'english' : 'Project Manager',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },

                    'class:translate-role-projman-w' : {
                        'portuguese' : 'Gestora de Projectos',
                        'english' : 'Project Manager',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },

                    'class:translate-role-intern' : {
                        'portuguese' : 'Estagiário',
                        'english' : 'Intern',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },

                    'class:translate-role-intern-w' : {
                        'portuguese' : 'Estagiária',
                        'english' : 'Intern',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },

                    'class:translate-role-translator-reviewer' : {
                        'portuguese' : 'Tradutor/Revisor',
                        'english' : 'Translator/Reviewer',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',  
                    },

                    'class:translate-role-translator' : {
                        'portuguese' : 'Tradutor',
                        'english' : 'Translator',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },

                    'class:translate-role-translator-w' : {
                        'portuguese' : 'Tradutora',
                        'english' : 'Translator',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },

                    'class:translate-role-soundtech' : {
                        'portuguese' : 'Som e Imagem - Direcção Técnica',
                        'english' : 'Sound Technician',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },

                    'class:translate-role-assdir' : {
                        'portuguese' : 'Assistente de Direcção',
                        'english' : 'Assistant to CEO',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },

                    'class:translate-partnerships' : {
                        'portuguese' : 'Parcerias',
                        'english' : 'Partnerships',
                        'spanish' : 'Lorem ipsum',
                        'french' : 'Lorem ipsum',
                    },

                    // form

                    'class:translate-name' : {
                        'portuguese' : 'Nome',
                        'english' : 'Name',
                        'spanish' : 'Nombre',
                        'french' : 'Nom',
                    },

                    'class:translate-email' : {
                        'portuguese' : 'Email',
                        'english' : 'Email',
                        'spanish' : '#TODO',
                        'french' : '#TODO',
                    },

                    'class:translate-message' : {
                        'portuguese' : 'Mensagem',
                        'english' : 'Message',
                        'spanish' : '#TODO',
                        'french' : '#TODO',
                    },

                    'class:translate-submit' : {
                        'portuguese' : 'Enviar',
                        'english' : 'Send',
                        'spanish' : '#TODO',
                        'french' : '#TODO',
                    }








                }
            });

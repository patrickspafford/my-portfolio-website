import React from 'react';
import Header from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';
import Book from './Book';
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Grid, Icon, Typography, createMuiTheme, ThemeProvider, withStyles} from '@material-ui/core';
import {ExpandMore, GraphicEq, MenuBook } from '@material-ui/icons';
import SHHML from '../../assets/SheHasHerMothersLaugh.jpg';
import algorithms from '../../assets/algorithms.jpg';
import happinessHypothesis from '../../assets/happinessHypothesis.jpg';
import InfinitePowers from '../../assets/InfinitePowers.jpg';
import Range from '../../assets/Range.jpg'
import WhyWeSleep from '../../assets/WhyWeSleep.jpg';
import MapsOfMeaning from '../../assets/mapsOfMeaning.jpg';
import Mengele from '../../assets/mengele.jpg';
import Attached from '../../assets/attached.jpg';
import Sourdough from '../../assets/sourdough.jpg';
import WhereGoodIdeasComeFrom from '../../assets/WhereGoodIdeasComeFrom.jpg';
import PersonalMBA from '../../assets/PersonalMBA.jpg';
import TheMoralLandscape from '../../assets/TheMoralLandscape.png';
import RulesForLife from '../../assets/RulesForLife.jpg';
import antifragile from '../../assets/antifragile.jpg';
import scale from '../../assets/scale.jpg';
import quantumWorld from '../../assets/quantumWorld.jpg'
import darkeningWeb from '../../assets/darkeningWeb.jpg';
import howMusicWorks from '../../assets/howMusicWorks.jpg';
import howNotToBeWrong from '../../assets/howNotToBeWrong.jpg';
import masterAlgorithm from '../../assets/masterAlgorithm.jpg';
import OceanOfLife from '../../assets/OceanOfLife.jpg';
import oneDevice from '../../assets/oneDevice.jpg';
import briefAnswers from '../../assets/briefAnswers.jpg';
import blockchain from '../../assets/blockchain.jpg';
import blackSwan from '../../assets/blackSwan.jpg';
import sundance from '../../assets/sundance.jpg';


const theme = createMuiTheme({
    overrides: {
      MuiCollapse: {
        container: {
          overflow: 'hidden',
        },
        entered: {
            overflow: 'auto'
        }
      },
    },
  });
const StyledExpansionPanelDetails = withStyles({
    root: {
        background: 'linear-gradient(0deg, white, #404183);'
    }
})(ExpansionPanelDetails);

const StyledExpansionPanel = withStyles({
    root: {
        backgroundColor: '#142630',
        color: 'white',
        marginTop: '1px',
        marginBottom: '1px'
    }
})(ExpansionPanel);

export default function BookshelfPage() {
    const expansionPanels = [
        {
            title: "Notable Audiobooks",
            icon: <GraphicEq />,
            books: [
                {
                    title: "She Has Her Mother's Laugh",
                    description: "Carl Zimmer presents a history of our understanding of heredity in this sweeping, resonating overview of a force that shaped human society--a force set to shape our future even more radically.",
                    img: SHHML
                },
                {
                    title: "Algorithms to Live By",
                    description: "Algorithms To Live By explains how computer algorithms work, why their relevancy isn't limited to the digital world and how you can make better decisions by strategically using the right algorithm at the right time, for example in dating, at home or in the office.",
                    img: algorithms
                },
                {
                    title: "The Happiness Hypothesis",
                    description: "Why do some people find meaning, purpose, and fulfillment in life while others do not? Jonathan Haidt’s book offers a detailed answer to this question. His “happiness hypothesis” aligns philosophical, religious, and theoretical texts with recent scientific insights. And he casts a wide net, drawing from psychology’s “attachment theory,” sociological research, and recent developments in the neuroscience of emotion. Haidt uses this research to illuminate modern truths in ancient and classic thinking—from Buddhism to Benjamin Franklin, the New Testament to Nietszche, Plato to Freud—showing how the field of positive psychology is tapping into something universal and timeless. ",
                    img: happinessHypothesis
                },
                {
                    title: "Infinite Powers",
                    description: "A magisterial history of calculus (and the people behind it) from one of the world's foremost mathematicians. This is the captivating story of mathematics greatest ever idea: calculus. Without it, there would be no computers, no microwave ovens, no GPS, and no space travel. But before it gave modern man almost infinite powers, calculus was behind centuries of controversy, competition, and even death. Taking us on a thrilling journey through three millennia, professor Steven Strogatz charts the development of this seminal achievement from the days of Archimedes to today's breakthroughs in chaos theory and artificial intelligence. Filled with idiosyncratic characters from Pythagoras to Fourier, Infinite Powers is a compelling human drama that reveals the legacy of calculus on nearly every aspect of modern civilisation, including science, politics, medicine, philosophy, and much besides.",
                    img: InfinitePowers
                },
                {
                    title: "Range",
                    description: "Range, a book about the value of being a generalist rather than a lifelong or career-long specialist, argues that many of the most effective people in elite professional fields (such as sports, art, and scientific research) succeed not despite the fact but because they find their way to that particular field after pursuing other endeavors first.",
                    img: Range
                },
                {
                    title: "Mengele",
                    description: "Mengele describes the international search for the Nazi doctor in 1985 that ended in a cemetery in Sao Paulo, Brazil, and the dogged forensic investigation that produced overwhelming evidence that Mengele had died―but failed to convince those who, arguably, most wanted him dead. This is the riveting story of science without limits, escape without freedom, and resolution without justice.",
                    img: Mengele
                },
                {
                    title: "Why We Sleep",
                    description: "Why We Sleep: The New Science of Sleep and Dreams is a science book about sleep by the neuroscientist and sleep researcher, Matthew Walker. Walker is a professor of neuroscience and psychology and the director of the Center for Human Sleep Science at the University of California, Berkeley. He answers important questions about sleep: how do caffeine and alcohol affect sleep? What really happens during REM sleep? Why do our sleep patterns change across a lifetime? How do common sleep aids affect us and can they do long-term damage? Charting cutting-edge scientific breakthroughs, and synthesizing decades of research and clinical practice, Walker explains how we can harness sleep to improve learning, mood, and energy levels; regulate hormones; prevent cancer, Alzheimer’s, and diabetes; slow the effects of aging; increase longevity; enhance the education and lifespan of our children, and boost the efficiency, success, and productivity of our businesses. Clear-eyed, fascinating, and accessible, Why We Sleep is a crucial and illuminating book.",
                    img: WhyWeSleep
                },
                {
                    title: "Maps of Meaning",
                    description: "Peterson's ambitious interdisciplinary odyssey draws insights from the worlds of religion, cognitive science and Jungian approaches to mythology and narrative. Maps of Meaning offers a critical guide to the riches of archaic and modern thought and invaluable insights into human motivation and cognition.",
                    img: MapsOfMeaning
                },
                {
                    title: "Attached",
                    description: "We already rely on science to tell us what to eat, when to exercise, and how long to sleep. Why not use science to help us improve our relationships? In this revolutionary book, psychiatrist and neuroscientist Dr. Amir Levine and Rachel Heller scientifically explain why why some people seem to navigate relationships effortlessly, while others struggle. Attached guides readers in determining what attachment style they and their mate (or potential mate) follow, offering a road map for building stronger, more fulfilling connections with the people they love.",
                    img: Attached
                },
                {
                    title: "Sourdough",
                    description: "Lois Clary, a software engineer at a San Francisco robotics company, codes all day and collapses at night. When her favourite sandwich shop closes up, the owners leave her with the starter for their mouthwatering sourdough bread. Lois becomes the unlikely hero tasked to care for it, bake with it and keep this needy colony of microorganisms alive.  Soon she is baking loaves daily and taking them to the farmer's market, where an exclusive close-knit club runs the show. When Lois discovers another, more secret market, aiming to fuse food and technology, a whole other world opens up. But who are these people, exactly?",
                    img: Sourdough
                }
                
                
            ]
        },
        {
            title: "Notable Printed Books",
            icon: <MenuBook />,
            books: [
                {
                    title: "Where Good Ideas Come From",
                    description: "A fascinating deep dive on innovation from the New York Times bestselling author of How We Got To Now and Farsighted The printing press, the pencil, the flush toilet, the battery--these are all great ideas. But where do they come from? What kind of environment breeds them? What sparks the flash of brilliance? How do we generate the breakthrough technologies that push forward our lives, our society, our culture? Steven Johnson's answers are revelatory as he identifies the seven key patterns behind genuine innovation, and traces them across time and disciplines. From Darwin and Freud to the halls of Google and Apple, Johnson investigates the innovation hubs throughout modern time and pulls out the approaches and commonalities that seem to appear at moments of originality",
                    img: WhereGoodIdeasComeFrom
                },
                {
                    title: "Ther Personal MBA",
                    description: "Getting an MBA is an expensive choice - one almost impossible to justify regardless of the state of the economy. Even the elite schools like Harvard and Wharton offer outdated, assembly-line programs that teach you more about PowerPoint presentations and unnecessary financial models than what it takes to run a real business. You can get better results (and save hundreds of thousands of dollars) by skipping business school altogether....Josh Kaufman founded PersonalMBA.com as an alternative to the business school boondoggle. His blog has introduced hundreds of thousands of readers to the best business books and most powerful business concepts of all time. Now, he shares the essentials of entrepreneurship, marketing, sales, negotiation, operations, productivity, systems design, and much more, in one comprehensive volume. The Personal MBA distills the most valuable business lessons into simple, memorable mental models that can be applied to real-world challenges. True leaders aren't made by business schools - they make themselves, seeking out the knowledge, skills, and experience they need to succeed. Read this book and you will learn the principles it takes most business professionals a lifetime of trial and error to master.",
                    img: PersonalMBA
                },
                {
                    title: "The Moral Landscape",
                    description: "The Moral Landscape: How Science Can Determine Human Values is a 2010 book by Sam Harris, in which the author promotes a science of morality and argues that many thinkers have long confused the relationship between morality, facts, and science. He aims to carve a third path between secularists who say morality is subjective (e.g. moral relativists), and religionists who say that morality is given by God and scripture. Harris contends that the only moral framework worth talking about is one where \"morally good\" things pertain to increases in the \"well-being of conscious creatures\". He then argues that, problems with philosophy of science and reason in general notwithstanding, 'moral questions' will have objectively right and wrong answers which are grounded in empirical facts about what causes people to flourish.",
                    img: TheMoralLandscape
                },
                {
                    title: "12 Rules for Life",
                    description: "Humorous, surprising and informative, Dr. Peterson tells us why skateboarding boys and girls must be left alone, what terrible fate awaits those who criticize too easily, and why you should always pet a cat when you meet one on the street. What does the nervous system of the lowly lobster have to tell us about standing up straight (with our shoulders back) and about success in life? Why did ancient Egyptians worship the capacity to pay careful attention as the highest of gods? What dreadful paths do people tread when they become resentful, arrogant and vengeful? Dr. Peterson journeys broadly, discussing discipline, freedom, adventure and responsibility, distilling the world's wisdom into 12 practical and profound rules for life. 12 Rules for Life shatters the modern commonplaces of science, faith and human nature, while transforming and ennobling the mind and spirit of its readers.",
                    img: RulesForLife
                },
                {
                    title: "Antifragile",
                    description: "Nassim Nicholas Taleb, the bestselling author of The Black Swan and one of the foremost thinkers of our time, reveals how to thrive in an uncertain world. Just as human bones get stronger when subjected to stress and tension, and rumors or riots intensify when someone tries to repress them, many things in life benefit from stress, disorder, volatility, and turmoil. What Taleb has identified and calls “antifragile” is that category of things that not only gain from chaos but need it in order to survive and flourish.In The Black Swan, Taleb showed us that highly improbable and unpredictable events underlie almost everything about our world. In Antifragile, Taleb stands uncertainty on its head, making it desirable, even necessary, and proposes that things be built in an antifragile manner. The antifragile is beyond the resilient or robust. The resilient resists shocks and stays the same; the antifragile gets better and better. Furthermore, the antifragile is immune to prediction errors and protected from adverse events. Why is the city-state better than the nation-state, why is debt bad for you, and why is what we call “efficient” not efficient at all? Why do government responses and social policies protect the strong and hurt the weak? Why should you write your resignation letter before even starting on the job? How did the sinking of the Titanic save lives? The book spans innovation by trial and error, life decisions, politics, urban planning, war, personal finance, economic systems, and medicine. And throughout, in addition to the street wisdom of Fat Tony of Brooklyn, the voices and recipes of ancient wisdom, from Roman, Greek, Semitic, and medieval sources, are loud and clear.Antifragile is a blueprint for living in a Black Swan world.",
                    img: antifragile
                },
                {
                    title: "The Ocean of Life",
                    description: "The sea feeds and sustains us, but everywhere we look marine life is under threat, from Caribbean reefs to arctic fisheries to the deepest regions of the sea. In this passionate paean to the sea and its creatures one of the world’s foremost marine conservation biologists tells the story of man and the sea, from the earliest traces of life on earth to the oceans as we know them today. He considers the impact of fishing and ocean acidification, rising tides and warming seas, plastics and shifting currents, and reveals what we must do now to preserve our precious oceans. The struggles of Turtles, Dolphins, Whales and Tuna are relatively well known, but few people appreciate just how much our seas have changed in the last fifty years and how many species are now under acute stress. At once passionate and persuasive, The Ocean of Life will appeal to readers of Four Fish and The Sixth Extinction –to those who care about environmental sustainability, and to anyone who loves the sea and its creatures.",
                    img: OceanOfLife
                },
                {
                    title: "The Quantum World",
                    description: "The world is a seriously bizarre place. Things can exist in two places at once and travel backwards and forwards in time. Waves and particles are one and the same, and objects change their behavior according to whether they are being watched.This is not some alternative universe but the realm of the very small, where quantum mechanics rules. In this weird world of atoms and their constituents, our common sense understanding of reality breaks down - yet quantum mechanics has never failed an experimental test. What does it all mean? For all its weirdness, quantum mechanics has given us many practical technologies including lasers and the transistors that underlie computers and all digital technology. In the future, it promises computers more powerful than any built before, the ability to communicate with absolute privacy, and even quantum teleportation. The Quantum World explores the past, present and future of quantum science, its applications and mind-bending implications. Discover how ideas from quantum mechanics are percolating out into the vast scale of the cosmos - perhaps, in the future, to reveal a new understanding of the big bang and the nature of space and time.",
                    img: quantumWorld
                },
                {
                    title: "Sundance",
                    description: "Legend has it that bank robber Harry Longbaugh and his partner, Robert Parker, were killed in a shoot-out in Bolivia. That was the supposed end of the Sundance Kid and Butch Cassidy. Sundance tells a different story. At the beginning of the twentieth century, Longbaugh is very much alive, though serving in a Wyoming prison under an alias. When he is released in 1913, Longbaugh reenters a changed world. Horses are being replaced by automobiles. Gas lamps are giving way to electric lights. Workers fight for safety, and women for the vote. What hasn’t changed is Longbaugh’s ingenuity, his deadly aim, and his love for his wife, Etta Place. It’s been two years since Etta stopped visiting him, and, determined to find her, Longbaugh follows her trail to New York City. Confounded by the city’s immensity, energy, chaos, and crowds, he learns that his wife was very different from the woman he thought he knew. Longbaugh finds himself in a tense game of cat and mouse, racing against time before the legend of the Sundance Kid catches up to destroy him. By turns suspenseful, rollicking, and poignant, Sundance is the story of one man dogged by his own past, seeking his true place in this new world.",
                    img: sundance
                },
                {
                    title: "The One Device",
                    description: "Odds are that as you read this, an iPhone is within reach. But before Steve Jobs introduced us to \"the one device,\" as he called it, a cell phone was merely what you used to make calls on the go.  How did the iPhone transform our world and turn Apple into the most valuable company ever? Veteran technology journalist Brian Merchant reveals the inside story you won't hear from Cupertino-based on his exclusive interviews with the engineers, inventors, and developers who guided every stage of the iPhone's creation. This deep dive takes you from inside One Infinite Loop to 19th century France to WWII America, from the driest place on earth to a Kenyan pit of toxic e-waste, and even deep inside Shenzhen's notorious \"suicide factories.\" It's a firsthand look at how the cutting-edge tech that makes the world work-touch screens, motion trackers, and even AI-made their way into our pockets. The One Device is a roadmap for design and engineering genius, an anthropology of the modern age, and an unprecedented view into one of the most secretive companies in history. This is the untold account, ten years in the making, of the device that changed everything.",
                    img: oneDevice
                },
                {
                    title: "The Darkening Web",
                    description: "No single invention of the last half century has changed the way we live now as much as the Internet. Alexander Klimburg was a member of the generation for whom it was a utopian ideal turned reality: a place where ideas, information, and knowledge could be shared and new freedoms found and enjoyed. Two decades later, the future isn’t so bright any more: increasingly, the Internet is used as a weapon and a means of domination by states eager to exploit or curtail global connectivity in order to further their national interests. Klimburg is a leading voice in the conversation on the implications of this dangerous shift, and in The Darkening Web, he explains why we underestimate the consequences of states’ ambitions to project power in cyberspace at our peril: Not only have hacking and cyber operations fundamentally changed the nature of political conflict—ensnaring states in a struggle to maintain a precarious peace that could rapidly collapse into all-out war—but the rise of covert influencing and information warfare has enabled these same global powers to create and disseminate their own distorted versions of reality in which anything is possible. At stake are not only our personal data or the electrical grid, but the Internet as we know it today—and with it the very existence of open and democratic societies. Blending anecdote with argument, Klimburg brings us face-to-face with the range of threats the struggle for cyberspace presents, from an apocalyptic scenario of debilitated civilian infrastructure to a 1984-like erosion of privacy and freedom of expression. Focusing on different approaches to cyber-conflict in the US, Russia and China, he reveals the extent to which the battle for control of the Internet is as complex and perilous as the one surrounding nuclear weapons during the Cold War—and quite possibly as dangerous for humanity as a whole. Authoritative, thought-provoking, and compellingly argued, The Darkening Web makes clear that the debate about the different aspirations for cyberspace is nothing short of a war over our global values.",
                    img: darkeningWeb
                },
                {
                    title: "Scale",
                    description: "Visionary physicist Geoffrey West is a pioneer in the field of complexity science, the science of emergent systems and networks. The term “complexity” can be misleading, however, because what makes West’s discoveries so beautiful is that he has found an underlying simplicity that unites the seemingly complex and diverse phenomena of living systems, including our bodies, our cities and our businesses. Fascinated by aging and mortality, West applied the rigor of a physicist to the biological question of why we live as long as we do and no longer. The result was astonishing, and changed science: West found that despite the riotous diversity in mammals, they are all, to a large degree, scaled versions of each other. If you know the size of a mammal, you can use scaling laws to learn everything from how much food it eats per day, what its heart-rate is, how long it will take to mature, its lifespan, and so on. Furthermore, the efficiency of the mammal’s circulatory systems scales up precisely based on weight: if you compare a mouse, a human and an elephant on a logarithmic graph, you find with every doubling of average weight, a species gets 25% more efficient—and lives 25% longer. Fundamentally, he has proven, the issue has to do with the fractal geometry of the networks that supply energy and remove waste from the organism’s body. West’s work has been game-changing for biologists, but then he made the even bolder move of exploring his work’s applicability. Cities, too, are constellations of networks and laws of scalability relate with eerie precision to them. Recently, West has applied his revolutionary work to the business world. This investigation has led to powerful insights into why some companies thrive while others fail. The implications of these discoveries are far-reaching, and are just beginning to be explored. Scale is a thrilling scientific adventure story about the elemental natural laws that bind us together in simple but profound ways. Through the brilliant mind of Geoffrey West, we can envision how cities, companies and biological life alike are dancing to the same simple, powerful tune.",
                    img: scale
                },
                {
                    title: "How Not To Be Wrong",
                    description: "The math we learn in school can seem like a dull set of rules, laid down by the ancients and not to be questioned. In How Not to Be Wrong, Jordan Ellenberg shows us how terribly limiting this view is: Math isn’t confined to abstract incidents that never occur in real life, but rather touches everything we do—the whole world is shot through with it.Math allows us to see the hidden structures underneath the messy and chaotic surface of our world. It’s a science of not being wrong, hammered out by centuries of hard work and argument. Armed with the tools of mathematics, we can see through to the true meaning of information we take for granted: How early should you get to the airport? What does “public opinion” really represent? Why do tall parents have shorter children? Who really won Florida in 2000? And how likely are you, really, to develop cancer? How Not to Be Wrong presents the surprising revelations behind all of these questions and many more, using the mathematician’s method of analyzing life and exposing the hard-won insights of the academic community to the layman—minus the jargon. Ellenberg chases mathematical threads through a vast range of time and space, from the everyday to the cosmic, encountering, among other things, baseball, Reaganomics, daring lottery schemes, Voltaire, the replicability crisis in psychology, Italian Renaissance painting, artificial languages, the development of non-Euclidean geometry, the coming obesity apocalypse, Antonin Scalia’s views on crime and punishment, the psychology of slime molds, what Facebook can and can’t figure out about you, and the existence of God. Ellenberg pulls from history as well as from the latest theoretical developments to provide those not trained in math with the knowledge they need. Math, as Ellenberg says, is “an atomic-powered prosthesis that you attach to your common sense, vastly multiplying its reach and strength.” With the tools of mathematics in hand, you can understand the world in a deeper, more meaningful way. How Not to Be Wrong will show you how.",
                    img: howNotToBeWrong
                },
                {
                    title: "The Black Swan",
                    description: "A black swan is an event, positive or negative, that is deemed improbable yet causes massive consequences. In this groundbreaking and prophetic book, Taleb shows in a playful way that Black Swan events explain almost everything about our world, and yet we—especially the experts—are blind to them. In this second edition, Taleb has added a new essay, On Robustness and Fragility, which offers tools to navigate and exploit a Black Swan world.",
                    img: blackSwan
                },
                {
                    title: "How Music Works",
                    description: "What makes a musical note different from any other sound? How can you tell if you have perfect pitch? Why do 10 violins sound only twice as loud as one? Do your Bob Dylan albums sound better on CD or vinyl? John Powell, a scientist and musician, answers these questions and many more in How Music Works, an intriguing and original guide to acoustics. In a clear, accessible, and engaging voice, Powell fascinates the reader with his delightful descriptions of the science and psychology lurking beneath the surface of music. With lively discussions of the secrets behind harmony, timbre, keys, chords, loudness, musical composition, and more, How Music Works will be treasured by music lovers everywhere.",
                    img: howMusicWorks
                },
                {
                    title: "Brief Answers to the Big Questions",
                    description: "Stephen Hawking was the most renowned scientist since Einstein, known both for his groundbreaking work in physics and cosmology and for his mischievous sense of humor. He educated millions of readers about the origins of the universe and the nature of black holes, and inspired millions more by defying a terrifying early prognosis of ALS, which originally gave him only two years to live. In later life he could communicate only by using a few facial muscles, but he continued to advance his field and serve as a revered voice on social and humanitarian issues. Hawking not only unraveled some of the universe’s greatest mysteries but also believed science plays a critical role in fixing problems here on Earth. Now, as we face immense challenges on our planet—including climate change, the threat of nuclear war, and the development of artificial intelligence—he turns his attention to the most urgent issues facing us. Will humanity survive? Should we colonize space? Does God exist? ​​These are just a few of the questions Hawking addresses in this wide-ranging, passionately argued final book from one of the greatest minds in history.",
                    img: briefAnswers
                },
                {
                    title: "The Master Algorithm",
                    description: "In the world's top research labs and universities, the race is on to invent the ultimate learning algorithm: one capable of discovering any knowledge from data, and doing anything we want, before we even ask. In The Master Algorithm, Pedro Domingos lifts the veil to give us a peek inside the learning machines that power Google, Amazon, and your smartphone. He assembles a blueprint for the future universal learner--the Master Algorithm--and discusses what it will mean for business, science, and society. If data-ism is today's philosophy, this book is its bible.",
                    img: masterAlgorithm
                },
                {
                    title: "Blockchain Revolution",
                    description: "In this revelatory book, Don and Alex Tapscott bring us a brilliantly researched, highly readable, and essential book about the technology driving the future of the economy.Blockchain is the ingeniously simple, revolution­ary protocol that allows transactions to be simultaneously anonymous and secure by maintaining a tamperproof public ledger of value. Though it’s best known as the technology that drives bitcoin and other digital cur­rencies, it also has the potential to go far beyond currency, to record virtually everything of value to humankind, from birth and death certifi­cates to insurance claims, land titles, and even votes.As with major paradigm shifts that preceded it, blockchain technology will create winners and losers. This book shines a light on where it can lead us in the next decade and beyond.",
                    img: blockchain
                }

            ]
        }
    ]
    return(
        <div style={{minWidth: '320px'}}>
            <Header style={{marginBottom: '10px'}} />
            {expansionPanels.map((expansionPanel, i) => {
                return (
                        <ThemeProvider theme={theme} key={i}>
                            <StyledExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMore style={{color: 'white'}}/>}>
                                    <Icon style={{marginRight: '10px'}}>
                                    {expansionPanel.icon}
                                    </Icon>
                                    <Typography>
                                        {expansionPanel.title}
                                    </Typography>
                                </ExpansionPanelSummary>
                                <StyledExpansionPanelDetails>
                                    <Grid container={true} style={{justify: 'center'}}>
                                    {expansionPanel.books.map(book =>
                                    <Book key={book.title} title={book.title} image={book.img} desc={book.description} />)}
                                    </Grid>
                                </StyledExpansionPanelDetails>
                            </StyledExpansionPanel>
                        </ThemeProvider>
                )
            })} 
            <Footer /> 
            
        </div>
    )
}
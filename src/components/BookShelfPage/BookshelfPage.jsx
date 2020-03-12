import React from 'react';
import Header from '../components/HeaderFooter/Header';
import Footer from '../components/HeaderFooter/Footer';
import Book from '../components/BookShelfPage/Book';
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Grid, Icon, Typography, createMuiTheme, ThemeProvider, withStyles} from '@material-ui/core';
import {ExpandMore, GraphicEq, MenuBook } from '@material-ui/icons';
import SHHML from '../assets/SheHasHerMothersLaugh.jpg';
import algorithms from '../assets/algorithms.jpg';
import happinessHypothesis from '../assets/happinessHypothesis.jpg';
import InfinitePowers from '../assets/InfinitePowers.jpg';
import Range from '../assets/Range.jpg'
import WhyWeSleep from '../assets/WhyWeSleep.jpg';
import MapsOfMeaning from '../assets/mapsOfMeaning.jpg';
import Mengele from '../assets/mengele.jpg';
import Attached from '../assets/attached.jpg';
import Sourdough from '../assets/sourdough.jpg';
import WhereGoodIdeasComeFrom from '../assets/WhereGoodIdeasComeFrom.jpg';
import PersonalMBA from '../assets/PersonalMBA.jpg';
import TheMoralLandscape from '../assets/TheMoralLandscape.png';
import RulesForLife from '../assets/RulesForLife.jpg';

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
                }
            ]
        }
    ]
    return(
        <>
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
                                    <Grid container={true}>
                                    {expansionPanel.books.map(book =>
                                    <Book key={book.title} title={book.title} image={book.img} desc={book.description} />)}
                                    </Grid>
                                </StyledExpansionPanelDetails>
                            </StyledExpansionPanel>
                        </ThemeProvider>
                )
            })} 
            <Footer /> 
            
        </>
    )
}
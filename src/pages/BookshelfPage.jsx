import React from 'react';
import Header from '../components/Header';
import Book from '../components/Book';
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, createMuiTheme, ThemeProvider} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SHHML from '../pictures/SheHasHerMothersLaugh.jpg';
import algorithms from '../pictures/algorithms.jpg';
import happinessHypothesis from '../pictures/happinessHypothesis.jpg';
import InfinitePowers from '../pictures/InfinitePowers.jpg';
import Range from '../pictures/Range.jpg'
import WhyWeSleep from '../pictures/WhyWeSleep.jpg';
import MapsOfMeaning from '../pictures/mapsOfMeaning.jpg';
import Mengele from '../pictures/mengele.jpg';
import Attached from '../pictures/attached.jpg';
import Sourdough from '../pictures/sourdough.jpg';
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
export default function BookshelfPage() {
    const expansionPanels = [
        {
            title: "Notable Audiobooks",
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
            books: [
                {
                    title: "Where Good Ideas Come From",
                    description: "",
                    img: ""
                }
            ]
        }
    ]
    return(
        <div style={{overflow: 'scroll', paddingTop: '80px'}}>
            <Header AppBarStyle="static" />
            {expansionPanels.map((expansionPanel, i) => {
                return (
            <ThemeProvider theme={theme}>
                <ExpansionPanel key={i}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>
                            {expansionPanel.title}
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        {expansionPanel.books.map(book =>
                        <Book key={book.title} title={book.title} image={book.img} desc={book.description} />)}
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                </ThemeProvider>
                )
            })}  
        </div>
    )
}
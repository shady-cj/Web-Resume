import "./App.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Education from "./components/Education";

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Profile />
                <div className="about-section">
                    <section className="skills">
                        <Skills />
                    </section>
                    <div className="work-education">
                        <section className="work">
                            <Work />
                        </section>
                        <section className="education">
                            <Education />
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;

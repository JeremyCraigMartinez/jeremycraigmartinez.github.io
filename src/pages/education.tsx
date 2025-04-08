import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type Expanded = 'GT' | 'WSU' | ''

const Education: React.FC = () => {
  const [isExpanded, expand] = useState<Expanded>('');
  const toggleSchool = (school: Expanded) => isExpanded === school ? '' : school

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold text-center mb-6">Education</h2>

      {/* Georgia Tech */}
      <div className="mb-4">
        <button
          onClick={() => expand(toggleSchool('GT'))}
          className="w-full bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-[0_4px_20px_0_rgba(179,163,105,0.5)] p-4 text-left transition-shadow duration-300"
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold">Georgia Institute of Technology</h3>
              <p className="text-sm text-gray-600">2018-2021 • GPA: 3.4</p>
              <p className="text-sm text-gray-600">Master of Science in Computer Science - Specialization in Interactive Intelligence</p>
            </div>
            {isExpanded === 'GT' ? <ChevronUp /> : <ChevronDown />}
          </div>
        </button>

        {isExpanded === 'GT' && (
          <div className="w-full min-w-full mt-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
            <ul className=" list-inside text-sm space-y-2">
              <li>
                <strong>Graduate Algorithms</strong> (Summer 2021)
                <ul className="ml-4 ">
                  <li>Dynamic programming, divide & conquer, graph algorithms (BFS, DFS, Dijkstra’s), max-flow, linear programming, NP-complete</li>
                </ul>
              </li>
              <li>
                <strong>Deep Learning</strong> (Fall 2020)
                <ul className="ml-4 ">
                  <li>CNN model construction - linear layer, max pooling, loss function</li>
                  <li>PyTorch application to larger scaled models</li>
                  <li>
                    fastMRI model implementation -&nbsp;
                    <a
                      href="https://github.com/kapoor1992/CS7643_Project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      GitHub Link
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Reinforcement Learning</strong> (Summer 2020)
                <ul className="ml-4 ">
                  <li>
                    Lunar lander leveraging Q-learning -&nbsp;
                    <a
                      href="https://github.com/JeremyCraigMartinez/RL-CS7642/blob/master/p2/main.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Code and Report
                    </a>
                  </li>
                  <li>
                    Correlated Q-learning recreation -&nbsp;
                    <a
                      href="https://github.com/JeremyCraigMartinez/RL-CS7642/blob/master/p3/main.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Report
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Machine Learning</strong> (Spring 2018)
                <ul className="ml-4 ">
                  <li>
                    Markov decision process - elevation gain through Seattle -&nbsp;
                    <a
                      href="https://github.com/JeremyCraigMartinez/omscs-cs7641-machine-learning-assignment-4/blob/master/jmartinez91-analysis.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Report
                    </a>
                  </li>
                  <li>
                    Unsupervised learning & dimensionality reduction -&nbsp;
                    <a
                      href="https://github.com/JeremyCraigMartinez/CS-7641-assignment-3/blob/master/jmartinez91-analysis.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Report
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Human Computer Interaction</strong> (Fall 2019)
                <ul className="ml-4 ">
                  <li>
                    Project on breakdown of elevator interface -&nbsp;
                    <a
                      href="https://github.com/JeremyCraigMartinez/CS6750-HCI/blob/master/Project%20P/main.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Report
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Washington State University */}
      <div>
        <button
          onClick={() => expand(toggleSchool('WSU'))}
          className="w-full bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-[0_4px_20px_0_rgba(152,30,50,0.4)] p-4 text-left transition-shadow duration-300"
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold">Washington State University</h3>
              <p className="text-sm text-gray-600">2011-2015 • GPA: 3.35</p>
              <p className="text-sm text-gray-600">Bachelor of Science in Computer Science</p>
            </div>
            {isExpanded === 'WSU' ? <ChevronUp /> : <ChevronDown />}
          </div>
        </button>
        {isExpanded === 'WSU' && (
          <div className="mt-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
            <ul className=" list-inside text-sm space-y-2">
              <li>
                Junior Writing Portfolio - <strong>Pass with Distinction</strong> - Top 10% of Graduating Class
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Education;

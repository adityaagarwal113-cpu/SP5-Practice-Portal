/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Layout, 
  BarChart3, 
  ShieldAlert, 
  HeartHandshake, 
  Calculator,
  Search,
  CheckCircle2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// --- Types ---
interface Question {
  id: number;
  chapter: string;
  examTerm: string;
  originalQ: string;
  title: string;
  text: string;
  solution: string;
  hint: string;
  frameworks: string;
  marks?: string;
  chapterName: string;
}

interface Chapter {
  id: string;
  name: string;
  questions: number[];
}

const CHAPTERS: Chapter[] = [
  { id: "chapter-1", name: "Derivatives & Hedging", questions: Array.from({ length: 32 }, (_, i) => i + 1) },
  { id: "chapter-2", name: "Portfolio Theory & ALM", questions: Array.from({ length: 29 }, (_, i) => i + 33) },
  { id: "chapter-3", name: "Risk Management", questions: Array.from({ length: 11 }, (_, i) => i + 62) },
  { id: "chapter-4", name: "Behavioural Finance & ESG", questions: Array.from({ length: 6 }, (_, i) => i + 73) },
  { id: "chapter-5", name: "Taxation & Regulation", questions: Array.from({ length: 5 }, (_, i) => i + 79) },
  { id: "chapter-6", name: "Performance Measurement", questions: Array.from({ length: 15 }, (_, i) => i + 84) },
];

export default function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    async function fetchAndParseMD() {
      try {
        const response = await fetch("/SP5_Master_Revision.md");
        const text = await response.text();
        
        // Basic parser for the structured MD
        const qBlocks = text.split("### Question ").slice(1);
        const parsedQs: Question[] = qBlocks.map((block, idx) => {
          const lines = block.split("\n");
          const firstLine = lines[0]; // "1 | Exam Term: Dec 22 | Original Q.3"
          const id = parseInt(firstLine.split(" | ")[0]);
          const examTerm = firstLine.split(" | ")[1]?.replace("Exam Term: ", "") || "";
          const originalQ = firstLine.split(" | ")[2]?.replace("Original Q.", "") || "";

          const questionTextMatch = block.match(/\*\*Question:\*\*\n([\s\S]*?)\n\n\*\*Full Model Solution:\*\*/);
          const questionText = questionTextMatch ? questionTextMatch[1].trim() : "";

          const solutionMatch = block.match(/\*\*Full Model Solution:\*\*\n([\s\S]*?)\n\n\*\*ActEd Exam Hint:\*\*/);
          const solution = solutionMatch ? solutionMatch[1].trim() : "";

          // The last few questions might end differently
          const hintMatch = block.match(/\*\*ActEd Exam Hint:\*\*\n([\s\S]*?)\n\n\*\*(Mnemonics\/Frameworks Applied|---)\*\*/);
          const hint = hintMatch ? hintMatch[1].trim() : block.match(/\*\*ActEd Exam Hint:\*\*\n([\s\S]*?)$/) ? block.match(/\*\*ActEd Exam Hint:\*\*\n([\s\S]*?)$/)![1].trim() : "";

          const frameworksMatch = block.match(/\*\*Mnemonics\/Frameworks Applied:\*\*\n([\s\S]*?)\n\n---/);
          const frameworks = frameworksMatch ? frameworksMatch[1].trim() : "";

          // Find chapter name based on ID
          const chapter = CHAPTERS.find(c => c.questions.includes(id));
          
          return {
            id,
            chapter: chapter?.id || "other",
            chapterName: chapter?.name || "Other",
            examTerm,
            originalQ,
            title: `Question ${id} — ${examTerm}`,
            text: questionText,
            solution,
            hint,
            frameworks,
            marks: block.match(/\[(\d+)\]/)?.[1]
          };
        });

        setQuestions(parsedQs);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading revision bank:", error);
      }
    }

    fetchAndParseMD();
  }, []);

  const filteredQuestions = useMemo(() => {
    return questions.filter(q => {
      const matchesSearch = 
        q.text.toLowerCase().includes(searchQuery.toLowerCase()) || 
        q.id.toString().includes(searchQuery);
      const matchesChapter = selectedChapter ? q.chapter === selectedChapter : true;
      return matchesSearch && matchesChapter;
    });
  }, [questions, searchQuery, selectedChapter]);

  const currentQuestion = filteredQuestions[currentIndex] || questions[currentIndex];

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowAnswer(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setShowAnswer(false);
    }
  };

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-4">
          <BookOpen className="w-12 h-12 text-indigo-600 animate-pulse" />
          <p className="text-slate-500 font-medium tracking-tight">Initializing Master Question Bank...</p>
        </div>
      </div>
    );
  }

  return (
    <div id="app-root" className="h-screen w-full bg-[#F1F5F9] flex overflow-hidden font-sans text-[#1E293B]">
      {/* Sidebar */}
      <aside id="sidebar" className="w-80 bg-[#0F172A] text-white flex flex-col flex-shrink-0 shadow-2xl z-20">
        <div className="p-6 border-b border-slate-700">
          <div className="text-[10px] font-bold tracking-[0.2em] text-indigo-400 uppercase mb-2">Senior Actuarial Tutor</div>
          <h1 className="text-xl font-bold leading-tight tracking-tight">
            SP5 Master Revision <span className="text-indigo-400">&</span> Question Bank
          </h1>
        </div>

        <div className="p-4 border-b border-slate-700/50">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              id="search-input"
              type="text"
              placeholder="Search concepts or Q#..."
              className="w-full bg-slate-800/80 border border-slate-600 rounded-lg py-2 pl-9 pr-4 text-xs focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentIndex(0);
              }}
            />
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-2 custom-scrollbar">
          <div className="px-5 py-4 text-[10px] uppercase tracking-wider text-slate-500 font-bold">Curriculum Chapters</div>
          <ul className="px-3 space-y-1">
            <li 
              id="chapter-all"
              onClick={() => {
                setSelectedChapter(null);
                setCurrentIndex(0);
              }}
              className={`p-3 rounded-lg cursor-pointer transition-all flex items-center justify-between text-xs ${!selectedChapter ? "bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 font-semibold" : "text-slate-400 hover:bg-slate-800 hover:text-white"}`}
            >
              <span>All Questions</span>
              <span className="text-[10px] bg-indigo-500/30 px-2 py-0.5 rounded text-white">{questions.length}</span>
            </li>
            {CHAPTERS.map((chap) => (
              <li 
                id={`chapter-${chap.id}`}
                key={chap.id}
                onClick={() => {
                  setSelectedChapter(chap.id);
                  setCurrentIndex(0);
                }}
                className={`p-3 rounded-lg cursor-pointer transition-all flex items-center justify-between text-xs ${selectedChapter === chap.id ? "bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-900/20" : "text-slate-400 hover:bg-slate-800 hover:text-white"}`}
              >
                <div className="flex items-center gap-3">
                  {getChapterIcon(chap.id)}
                  <span>{chap.name}</span>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded ${selectedChapter === chap.id ? "bg-white/20 text-white" : "bg-slate-700 text-slate-300"}`}>
                  {chap.questions.length} Qs
                </span>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-5 m-5 bg-indigo-900/20 rounded-xl border border-indigo-500/10 backdrop-blur-sm">
          <h3 className="text-[10px] font-bold text-indigo-300 uppercase mb-3 flex items-center gap-2">
            <Star className="w-3 h-3 fill-indigo-400" />
            The Six Habits
          </h3>
          <p className="text-[11px] leading-relaxed text-slate-300 italic">
            "Don't just read the solution; sketch the framework (e.g. SOUNDER TRACTORS) before looking."
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main id="main-content" className="flex-1 flex flex-col h-full overflow-hidden relative">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 flex-shrink-0 z-10">
          <div className="flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1.5">Learning Progress</span>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-900 min-w-[80px]">Question {currentIndex + 1} of {filteredQuestions.length || 0}</span>
                <div className="flex h-1.5 w-64 bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentIndex + 1) / (filteredQuestions.length || 1)) * 100}%` }}
                    className="bg-indigo-600 h-full shadow-[0_0_8px_rgba(79,70,229,0.4)]" 
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button 
              id="prev-btn"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="group flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Previous
            </button>
            <button 
              id="next-btn"
              onClick={handleNext}
              disabled={currentIndex >= (filteredQuestions.length - 1)}
              className="group flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 disabled:opacity-30 disabled:shadow-none disabled:cursor-not-allowed transition-all"
            >
              Next Question
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </header>

        <div className="flex-1 p-8 overflow-y-auto custom-scrollbar flex flex-col gap-6">
          <AnimatePresence mode="wait">
            {currentQuestion ? (
              <motion.div 
                key={currentQuestion.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden flex flex-col"
              >
                {/* Question Header */}
                <div id="q-header" className="p-8 border-b border-slate-100 bg-slate-50/40 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8">
                     {currentQuestion.marks && (
                       <div className="flex flex-col items-end">
                         <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Max Score</span>
                         <span className="text-sm font-black text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-100 shadow-sm">{currentQuestion.marks} Marks</span>
                       </div>
                     )}
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] font-bold bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded tracking-wide uppercase">{currentQuestion.chapterName}</span>
                    <span className="text-[10px] font-bold bg-slate-200 text-slate-600 px-2 py-0.5 rounded tracking-wide uppercase">Term: {currentQuestion.examTerm}</span>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-4 leading-tight">
                    {currentQuestion.title}
                  </h2>
                  <div className="prose prose-slate prose-sm max-w-none prose-p:italic prose-p:text-slate-700 prose-p:font-serif prose-p:text-lg prose-p:leading-relaxed">
                    <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>
                      {`"${currentQuestion.text}"`}
                    </ReactMarkdown>
                  </div>
                </div>

                <div className="flex flex-1 xl:flex-row flex-col overflow-hidden">
                  {/* Model Solution */}
                  <div id="q-solution" className="flex-1 p-8 overflow-y-auto">
                    <div className="flex items-center justify-between mb-8">
                       <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                          Expert Model Solution
                       </h3>
                       <button
                         id="toggle-answer"
                         onClick={() => setShowAnswer(!showAnswer)}
                         className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                          showAnswer 
                            ? "bg-slate-200 text-slate-600 hover:bg-slate-300" 
                            : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/20 animate-pulse"
                         }`}
                       >
                         {showAnswer ? "Hide Answer" : "Show Model Solution"}
                       </button>
                    </div>

                    <AnimatePresence mode="wait">
                      {showAnswer ? (
                        <motion.div 
                          key="answer"
                          initial={{ opacity: 0, filter: "blur(10px)" }}
                          animate={{ opacity: 1, filter: "blur(0px)" }}
                          exit={{ opacity: 0, filter: "blur(10px)" }}
                          className="markdown-body text-[14px]"
                        >
                          <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>
                            {currentQuestion.solution}
                          </ReactMarkdown>
                        </motion.div>
                      ) : (
                        <motion.div 
                          key="placeholder"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="h-full flex flex-col items-center justify-center text-slate-400 text-center py-20"
                        >
                          <BookOpen className="w-12 h-12 mb-4 opacity-10" />
                          <p className="text-sm font-medium">Attempt the question first before revealing the solution</p>
                          <p className="text-[10px] mt-2 opacity-50 uppercase tracking-widest">Active recall is the key to deep learning</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Sidebar Info */}
                  <div id="q-meta" className="w-full xl:w-96 bg-slate-50/80 border-l border-slate-100 p-8 flex flex-col gap-8">
                    {/* Exam Hint */}
                    <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm relative overflow-hidden group hover:border-indigo-200 transition-colors">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-50/50 rounded-bl-full flex items-start justify-end p-2 transition-transform group-hover:scale-110">
                        <Star className="w-5 h-5 text-indigo-400/50 fill-indigo-400/10" />
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-6 bg-indigo-600 rounded-lg text-white flex items-center justify-center shadow-md shadow-indigo-100">
                          <Star className="w-3 h-3 fill-current" />
                        </div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900">ActEd Exam Hint</h4>
                      </div>
                      <div className="text-xs text-slate-600 leading-relaxed font-medium">
                        <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>
                          {currentQuestion.hint}
                        </ReactMarkdown>
                      </div>
                    </div>

                    {/* Frameworks */}
                    {currentQuestion.frameworks && (
                      <div className="border-t border-slate-200 pt-8">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-5 flex items-center gap-2">
                          <Layout className="w-3 h-3 text-indigo-500" />
                          Strategic Frameworks
                        </h4>
                        <div className="p-5 bg-indigo-900 rounded-xl shadow-xl shadow-indigo-900/10 text-white leading-relaxed text-xs font-medium">
                          <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>
                            {currentQuestion.frameworks}
                          </ReactMarkdown>
                        </div>
                      </div>
                    )}

                    <div className="mt-auto pt-4 flex items-center gap-3 grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                       <BarChart3 className="w-4 h-4 text-slate-400" />
                       <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Actuarial Grade Content</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="flex flex-col items-center justify-center p-20 text-slate-400 italic">
                <Search className="w-12 h-12 mb-4 opacity-20" />
                <p>No questions found matching your criteria</p>
              </div>
            )}
          </AnimatePresence>

          <footer className="bg-indigo-900 text-white rounded-2xl p-5 flex items-center justify-between flex-shrink-0 shadow-2xl shadow-indigo-900/20 isolate">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-400/20 flex items-center justify-center">
                  <Calculator className="w-4 h-4 text-indigo-300" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-indigo-300 font-bold uppercase tracking-[0.2em] leading-none mb-1">Status</span>
                  <span className="text-xs font-bold">Chapter Readiness: 92%</span>
                </div>
              </div>
              <div className="h-8 w-px bg-indigo-700/50" />
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-400/20 flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-indigo-300" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-indigo-300 font-bold uppercase tracking-[0.2em] leading-none mb-1">Technical Focus</span>
                  <span className="text-xs font-medium italic">Latex-rendered derivatives & formulas</span>
                </div>
              </div>
            </div>
            <div className="text-[10px] font-bold text-indigo-300/80 tracking-widest uppercase">
              ActEd Style Revision Integrated
            </div>
          </footer>
        </div>
      </main>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(148, 163, 184, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(148, 163, 184, 0.4);
        }
        
        .markdown-body ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .markdown-body li {
          margin-bottom: 2rem;
          position: relative;
          padding-left: 2.5rem;
          line-height: 1.7;
          color: #475569;
          display: block;
        }
        .markdown-body li::before {
          content: '•';
          position: absolute;
          left: 0;
          top: -0.2rem;
          color: #4f46e5;
          font-weight: 900;
          font-size: 2rem;
          line-height: 1;
        }
        .markdown-body p {
          margin-bottom: 1.5rem;
        }
        .markdown-body strong {
          color: #0f172a;
          font-weight: 800;
          display: inline-block;
          margin-bottom: 0.25rem;
        }
        .markdown-body em {
          color: #6366f1;
          font-style: italic;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}

function getChapterIcon(id: string) {
  switch(id) {
    case "chapter-1": return <Calculator className="w-4 h-4 shadow-sm" />;
    case "chapter-2": return <BarChart3 className="w-4 h-4 shadow-sm" />;
    case "chapter-3": return <ShieldAlert className="w-4 h-4 shadow-sm" />;
    case "chapter-4": return <HeartHandshake className="w-4 h-4 shadow-sm" />;
    case "chapter-5": return <Layout className="w-4 h-4 shadow-sm" />;
    case "chapter-6": return <Star className="w-4 h-4 shadow-sm" />;
    default: return <BookOpen className="w-4 h-4 shadow-sm" />;
  }
}

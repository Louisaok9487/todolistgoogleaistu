
import React from 'react';

interface InstructionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CloseIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
);

const InstructionModal: React.FC<InstructionModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div 
        className="bg-slate-800 rounded-lg shadow-2xl p-6 sm:p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
            Deployment Instructions
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <CloseIcon />
          </button>
        </div>
        
        <div className="space-y-6 text-slate-300">
          <div>
            <h3 className="text-xl font-semibold text-teal-300 mb-2">Step 1: Upload to GitHub (Web UI)</h3>
            <ol className="list-decimal list-inside space-y-2 pl-2">
              <li>Go to <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">github.com</a> and log in.</li>
              <li>Click the <span className="font-mono bg-slate-700 px-1.5 py-0.5 rounded">+</span> icon in the top-right corner and select <span className="font-mono bg-slate-700 px-1.5 py-0.5 rounded">New repository</span>.</li>
              <li>Give your repository a name (e.g., `my-todo-list`) and click <span className="font-mono bg-slate-700 px-1.5 py-0.5 rounded">Create repository</span>.</li>
              <li>On your new repository page, click the <span className="font-mono bg-slate-700 px-1.5 py-0.5 rounded">uploading an existing file</span> link.</li>
              <li>Drag and drop all the files from this project (`metadata.json`, `index.html`, `index.tsx`, `App.tsx`, `types.ts`, and the `components` folder) into the browser window.</li>
              <li>Once the files are uploaded, add a commit message (e.g., "Initial commit") and click <span className="font-mono bg-slate-700 px-1.5 py-0.5 rounded">Commit changes</span>.</li>
            </ol>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-teal-300 mb-2">Step 2: Deploy with Netlify</h3>
            <ol className="list-decimal list-inside space-y-2 pl-2">
              <li>Go to <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">netlify.com</a> and sign up or log in (you can use your GitHub account).</li>
              <li>From your dashboard, click <span className="font-mono bg-slate-700 px-1.5 py-0.5 rounded">Add new site</span> &gt; <span className="font-mono bg-slate-700 px-1.5 py-0.5 rounded">Import an existing project</span>.</li>
              <li>Connect to GitHub and authorize Netlify.</li>
              <li>Select the repository you just created (`my-todo-list`).</li>
              <li>Netlify should automatically detect the settings. You can leave the build command and publish directory fields blank since this is a simple static site without a build step.</li>
              <li>Click <span className="font-mono bg-slate-700 px-1.5 py-0.5 rounded">Deploy site</span>. Netlify will build and deploy your site, giving you a live URL in a few moments!</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionModal;

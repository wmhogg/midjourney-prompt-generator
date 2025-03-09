                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Chaos
                </label>
                <select
                  value={chaos}
                  onChange={(e) => setChaos(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  {chaosOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-gray-500 mt-1">Controls randomness in the generation</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Stylize
                </label>
                <select
                  value={stylize}
                  onChange={(e) => setStylize(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  {stylizeOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-gray-500 mt-1">Controls stylistic intensity</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Version
                </label>
                <select
                  value={version}
                  onChange={(e) => setVersion(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  {versionOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Style Mode
                </label>
                <select
                  value={styleMode}
                  onChange={(e) => setStyleMode(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  {styleModeOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="tileMode"
                  checked={tileMode}
                  onChange={(e) => setTileMode(e.target.checked)}
                  className="h-4 w-4 text-blue-600 rounded"
                />
                <label htmlFor="tileMode" className="ml-2 text-sm text-gray-700">
                  Tile Mode (Creates seamless patterns)
                </label>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Exclusion Parameters
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {noParamOptions.map(option => (
                    <div key={option.value} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`no-${option.value}`}
                        checked={noParams.includes(option.value)}
                        onChange={() => handleNoParamChange(option.value)}
                        className="h-4 w-4 text-blue-600 rounded"
                      />
                      <label htmlFor={`no-${option.value}`} className="ml-2 text-sm text-gray-700">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Prompt History Section */}
        <div className="mb-6 border border-gray-200 rounded-lg overflow-hidden">
          <div 
            className="flex justify-between items-center bg-gray-50 p-3 cursor-pointer"
            onClick={() => toggleSection('history')}
          >
            <h2 className="text-lg font-semibold text-gray-800">Prompt History</h2>
            {expandedSections.history ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
          
          {expandedSections.history && (
            <div className="p-4">
              {promptHistory.length > 0 ? (
                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {promptHistory.map((item, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-md hover:bg-gray-100">
                      <div className="flex justify-between items-start">
                        <div className="text-sm font-medium text-gray-700 mb-1">{item.subject}</div>
                        <div className="text-xs text-gray-500">
                          {new Date(item.timestamp).toLocaleString()}
                        </div>
                      </div>
                      <div className="text-xs text-gray-600 truncate mb-2">{item.prompt}</div>
                      <button
                        onClick={() => navigator.clipboard.writeText(item.prompt)}
                        className="text-xs text-blue-600 hover:text-blue-800 flex items-center"
                      >
                        <Clipboard size={12} className="mr-1" />
                        Copy
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center text-gray-500">No history yet</div>
              )}
            </div>
          )}
        </div>
        
        {/* Generated Prompt */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Generated Prompt</h2>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <pre className="whitespace-pre-wrap text-sm font-mono">
              {subject ? generatePrompt() : "Complete the required fields to generate a prompt"}
            </pre>
          </div>
          
          <div className="mt-4 flex space-x-4">
            <button
              onClick={copyPrompt}
              disabled={!subject}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
            >
              <Clipboard size={16} className="mr-2" />
              Copy Prompt
            </button>
            
            <button
              onClick={resetForm}
              className="flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
            >
              <RefreshCw size={16} className="mr-2" />
              Reset
            </button>
          </div>
        </div>
        
        {/* Info Box */}
        <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200 flex">
          <Info size={20} className="text-blue-500 mr-2 flex-shrink-0 mt-1" />
          <div className="text-sm text-blue-800">
            <p className="font-medium">Tips for effective prompts:</p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Be specific about what you want to see</li>
              <li>Combine different artistic styles for unique results</li>
              <li>Use the --c parameter to control variation (higher = more random)</li>
              <li>The --s parameter affects stylistic intensity</li>
              <li>Use exclusion parameters to avoid unwanted elements</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidjourneyPromptBuilder;
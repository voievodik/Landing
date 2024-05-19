import { FC, useRef, useState } from 'react';
import { Close } from '../Icons/Close';
import { twMerge } from 'tailwind-merge';

type FileUploadProps = {
  hasErorr: boolean;
  onChange: (value: File) => void;
};

export const FileUpload: FC<FileUploadProps> = ({ onChange, hasErorr }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [percentDone, setPercentDone] = useState(0);

  const setProgressBar = () => {
    const time = 1000;

    if (percentDone < 500) {
      const interval = setInterval(() => {
        setPercentDone(prev => prev + 1);
      }, time / 1000);

      setTimeout(() => {
        clearInterval(interval);
      }, 2000);
    }
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e?.target?.files;
    const currentFile = files && files[0];
    if (currentFile) {
      const isImage = currentFile.type.includes('image');
      if (isImage) {
        onChange(currentFile);
        setFile(currentFile);
        setProgressBar();
      }
    }
  };

  return (
    <>
      <div>
        <div className="flex min-w-[23.75rem] sm:min-w-[20.5rem]">
          <label
            htmlFor="avt"
            className={twMerge(
              'px-[14px] py-[15px] border rounded-s-[4px] cursor-pointer flex items-center',
              hasErorr ? 'border-error' : 'border-black'
            )}
          >
            Upload
          </label>
          <div
            className={twMerge(
              'px-[14px] py-[15px] border text-gray-1 rounded-e-[4px] w-full flex items-center',
              hasErorr ? 'border-error border-l-transparent' : 'border-gray-1'
            )}
          >
            {file ? (
              <div>
                <div className="text-black flex justify-between">
                  {`${file.name.length > 25 ? `${file.name.slice(0, 25)}...` : file}`}
                  <button onClick={() => setFile(null)}>
                    <Close />
                  </button>
                </div>
                <svg height="8" width="100%" style={{ borderRadius: '10px' }}>
                  <line
                    x="0"
                    y="0"
                    x2={`${percentDone}%`}
                    y2="0"
                    style={{
                      stroke: '#000000',
                      strokeWidth: '18',
                      borderRadius: '10px'
                    }}
                  />
                </svg>
              </div>
            ) : (
              <div>Upload your photo</div>
            )}
          </div>
        </div>
      </div>
      <input
        ref={inputRef}
        id="avt"
        className="peer hidden inset-0 cursor-pointer min-w-[360px]"
        type="file"
        onChange={handleUpload}
        accept="image/*"
      />
    </>
  );
};

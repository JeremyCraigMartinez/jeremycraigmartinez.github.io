import '../assets/resume.css'

type Props = {
  pdfUrl?: string,
  width?: string,
  height?: string,
}

const Resume: React.FC<Props> = ({ pdfUrl = "/resume.pdf", width = "100%", height = "100%" }: Props) => {
  return (
    <div className="pdf-viewer">
      <iframe
        src={pdfUrl}
        width={width}
        height={height}
        title="PDF Viewer"
        style={{ border: "none" }}
      />
    </div>
  );
};
  
  export default Resume;
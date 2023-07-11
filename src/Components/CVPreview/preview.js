import PreviewEducation from "./previewEducation";
import PreviewExperience from "./previewExperience";
import PreviewPersonal from "./previewPersonal";
import "./style.css"
export default function Preview(){
    return (
        <div class="preview">
        <PreviewPersonal/>
        <PreviewExperience/>
        <PreviewEducation />
        </div>
    )
}
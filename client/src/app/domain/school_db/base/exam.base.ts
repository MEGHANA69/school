/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|


 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE examBase PLEASE EDIT ../exam.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
import { Course } from '../course';
import { Student } from '../student';
import { Teacher } from '../teacher';

/**
 * This is the model of exam object
 *
 */
export class ExamBase {

    constructor() { }

    public _id: string;
    public place?: string;
    public score: number;
    public validate: Boolean;
    // Relations _courses
    public _courses: Course | string;
    // Relations _student
    public _student: Student | string;
    // Relations _teacher
    public _teacher: Teacher | string;
}

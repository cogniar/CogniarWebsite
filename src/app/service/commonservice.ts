import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class commonservice {
isDark:BehaviorSubject<boolean>;
iswhichMenu:BehaviorSubject<string>;
section:BehaviorSubject<string>;
constructor(){
    this.isDark=new BehaviorSubject(false);
    this.iswhichMenu=new BehaviorSubject("");
    this.section=new BehaviorSubject("");
}
setMode(value:boolean)
{
    this.isDark.next(value);
}
getMode()
{
    return this.isDark.getValue();
}
setMenu(value:string)
{
    this.iswhichMenu.next(value);
}
getMenu()
{
    return this.iswhichMenu.getValue();
}


setSection(value:string)
{
    this.section.next(value);
}
getSection()
{
    return this.section.getValue();
}
}
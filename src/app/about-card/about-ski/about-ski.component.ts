import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';


interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Programming Languages/Frameworks/Libraries',
    children: [{name: 'C, C++, C#, SDL2, Arduino'}, {name: 'Java, Spring Boot, Hibernate, Android, Kotlin'}, {name: 'Python, Flask'},{name:'Php, Javascript,Typescript,Angular'},{name:'Pascal'},{name: 'Oracle SQL, MySql'}, {name: 'Matlab, VHDL, Shell script, Assembly'}],
  },
  {
    name: 'IDEs/Programms/Websites',
    children: [{name:'Visual Studio, Visual Code, Arduino IDE, Unity'},{name:'IntelliJ IDEA, Eclipse, Android Studio'},{name:'PyCharm'},{name:'Lazarus IDE, MySQL Workbench, Linux Terminal, Linux nano'},{name:'Circuitverse, Tinkercrad, LTspice, NI Multisim, Active VHDL, Proteus, Keil uVision5'},{name:'Matlab, Simulink'},{name:'Git, Github, Microsoft Azure, Netify'}],
  },
  {
    name: 'Courses/Concepts/Other',
    children:[{name:'Databases, Cybersecurity, Machine Learning, Concurrent Programming, Web/Mobile development, Computer Networks'}]
  }
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'cvapp-about-ski',
  templateUrl: './about-ski.component.html',
  styleUrls: ['./about-ski.component.scss']
})
export class AboutSkiComponent implements OnInit {

  ngOnInit(): void {
  }

  simple:boolean= true;
  details:boolean=false;

  changeState(){
    this.simple=!this.simple;
    this.details=!this.details;
    //console.log(this.simple);
  }

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

}

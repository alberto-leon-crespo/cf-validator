import {BaseComponent} from "@carbonfrog/kernel/commonjs/BaseComponent";
import {BaseComponentInterface} from "@carbonfrog/kernel/commonjs/BaseComponentInterface";
import * as path from "path";
import {ContainerBuilder} from "node-dependency-injection";

export class ValidatorComponent extends BaseComponent implements BaseComponentInterface {
    public loadComponent(containerBuilder: ContainerBuilder): void {
        this.setContainerBuilder(containerBuilder);
        this.setComponentDir(path.resolve(__dirname));
        this.setComponentConfigDir("config");
        this.setComponentConfigFilesFormat("yml");
        this.setComponentName("@carbonfrog/validator");
        this.load("services.yml");
    }
}

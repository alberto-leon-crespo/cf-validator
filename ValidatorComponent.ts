import {BaseComponent} from "../../kernel/BaseComponent";
import {BaseComponentInterface} from "../../kernel/BaseComponentInterface";
import path from "path";
// @ts-ignore
import {ContainerBuilder, YamlFileLoader, JsFileLoader, JsonFileLoader, FileLoader} from "node-dependency-injection";

export class ValidatorComponent extends BaseComponent implements BaseComponentInterface {
    public load(containerBuilder: ContainerBuilder): void {
        this._componentConfigDir = "config";
        this._componentName = "validator";
        this._componentDir = path.resolve(__dirname);
        this._componentConfigFilesFormat = "yml";
        this._fileLoader = new YamlFileLoader(containerBuilder);
        this._fileLoader.load(path.join(this._componentDir, this._componentConfigDir, "services.yml"));
    }
}

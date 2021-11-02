/* tslint:disable */
/* eslint-disable */
/**
* @param {string} fetch_contract
* @returns {any}
*/
export function init_session(fetch_contract: string): any;
/**
* @param {string} command
* @returns {string}
*/
export function handle_command(command: string): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly init_session: (a: number, b: number) => number;
  readonly handle_command: (a: number, b: number, c: number) => void;
  readonly rust_psm_on_stack: (a: number, b: number, c: number, d: number) => void;
  readonly rust_psm_stack_direction: () => number;
  readonly rust_psm_stack_pointer: () => number;
  readonly rust_psm_replace_stack: (a: number, b: number, c: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hf4ff9f9de643a721: (a: number, b: number, c: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly wasm_bindgen__convert__closures__invoke2_mut__h311bee48e0b7ede9: (a: number, b: number, c: number, d: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;

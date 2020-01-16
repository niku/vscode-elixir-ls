import * as assert from "assert";

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from "vscode";
import { languageClient } from "../../extension";

let extension: vscode.Extension<void>;

suite("Extension Test Suite", () => {
  vscode.window.showInformationMessage("Start all tests.");

  suiteSetup(async () => {
    extension = vscode.extensions.getExtension("elixir-lsp.elixir-ls");
    await extension.activate();
  });

  test("extention is available", async () => {
    assert.ok(extension.isActive);
    assert.ok(languageClient);
  });

  test("a test sholud be failed", () => {
    assert.ok(false);
  });
});

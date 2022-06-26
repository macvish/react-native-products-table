//
//  RNProductsTableModule.swift
//  RNProductsTableModule
//
//  Copyright © 2022 Macanthony Ahaotu. All rights reserved.
//

import Foundation

@objc(RNProductsTableModule)
class RNProductsTableModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
